import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import {createSocket} from '../socket';

type WaitingScreenProps = NativeStackScreenProps<StackProps, 'WaitingScreen'>;

const WaitingScreen = ({navigation, route}: WaitingScreenProps) => {
  const {user, setUser, code} = route.params;

  useEffect(() => {
    const ws = createSocket(user);
    ws.emit('client_connect', {userId: user.id, code});
    ws.on('quiz_started', roundTime => {
      navigation.navigate('QuizScreen', {user, setUser, roundTime, socket: ws});
    });
  }, []);

  return (
    <Layout
      navigation={navigation}
      user={user}
      setUser={setUser}
      title={'Добро пожаловать!'}>
      <Text>Ожидание других участников</Text>
    </Layout>
  );
};

export default WaitingScreen;
