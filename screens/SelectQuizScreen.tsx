import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import {User} from '../types';

type SelectQuizScreenProps = NativeStackScreenProps<
  StackProps,
  'SelectQuizScreen'
>;

const goToShareScreen =
  ({navigate}: SelectQuizScreenProps['navigation'], user: User) =>
  () =>
    // @ts-ignore
    navigate('ShareScreen', user);

const SelectQuizScreen = ({navigation, route}: SelectQuizScreenProps) => {
  const {user, setUser} = route.params;
  return (
    <Layout
      navigation={navigation}
      user={user}
      setUser={setUser}
      showBackButton
      isScrollable
      title={'Выберите опрос'}>
      <View style={styles.mainContent}>
        <Button
          title={'Опрос 1'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation, user)}
        />
        <Button
          title={'Опрос 2'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation, user)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation, user)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation, user)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation, user)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation, user)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation, user)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation, user)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation, user)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation, user)}
        />
        <Button
          title={'Опрос 5'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation, user)}
        />
      </View>
    </Layout>
  );
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
