import React from 'react';
import {Alert} from 'react-native';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';

type WaitingScreenProps = NativeStackScreenProps<StackProps, 'WaitingScreen'>;

const WaitingScreen = ({navigation, route}: WaitingScreenProps) => {
  const {user, setUser} = route.params;
  return (
    <Layout
      navigation={navigation}
      user={user}
      setUser={setUser}
      title={'Добро пожаловать!'}>
      <Button
        title={'Создать'}
        // @ts-ignore
        onPress={() => navigation.navigate('SelectQuizScreen')}
      />
      <Button
        title={'Подключиться к опросу'}
        onPress={() => Alert.alert('Подключаемся к опросу')}
      />
    </Layout>
  );
};

export default WaitingScreen;
