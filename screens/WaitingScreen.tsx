import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import {createSocket} from '../socket';

type WaitingScreenProps = NativeStackScreenProps<StackProps, 'WaitingScreen'>;

const WaitingScreen = ({navigation, route}: WaitingScreenProps) => {
  const {user, setUser, code} = route.params;
  const [userAmount, setUserAmount] = useState(0);

  useEffect(() => {
    const ws = createSocket(user);
    ws.on('client_connected', amount => {
      console.log(amount);
      setUserAmount(amount);
    });
    ws.on('quiz_started', roundTime => {
      navigation.navigate('QuizScreen', {user, setUser, roundTime, socket: ws});
    });
    ws.emit('client_connect', {userId: user.id, code});
  }, []);

  return (
    <Layout
      navigation={navigation}
      user={user}
      setUser={setUser}
      title={'Добро пожаловать!'}>
      <Text>Ожидание других участников</Text>
      <Text>Пользователей подключено: {userAmount}</Text>
    </Layout>
  );
};

export default WaitingScreen;
