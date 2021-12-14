import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import {useQuery} from 'react-query';
import getQuizzes from '../api/getQuizzes';
import Loader from '../components/Loader';
import {ShareScreenProps} from './ShareScreen';

type SelectQuizScreenProps = NativeStackScreenProps<
  StackProps,
  'SelectQuizScreen'
>;

const goToShareScreen =
  (
    {navigate}: SelectQuizScreenProps['navigation'],
    params: ShareScreenProps['route']['params'],
  ) =>
  () =>
    // @ts-ignore
    navigate('ShareScreen', params);

const SelectQuizScreen = ({navigation, route}: SelectQuizScreenProps) => {
  const {user, setUser} = route.params;
  const {isLoading, data} = useQuery('/quiz', getQuizzes);
  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    return (
      <Layout
        navigation={navigation}
        user={user}
        setUser={setUser}
        showBackButton
        isScrollable
        title={'Выберите опрос'}>
        <View style={styles.mainContent}>
          {data.map(quiz => (
            <Button
              key={quiz.id.toString()}
              title={quiz.title}
              pressableStyle={styles.buttonStyle}
              onPress={goToShareScreen(navigation, {user, setUser, quiz})}
            />
          ))}
        </View>
      </Layout>
    );
  }

  return <Text>Что-то пошло не так:(</Text>;
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '60%',
  },
  mainContent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});

export default SelectQuizScreen;
