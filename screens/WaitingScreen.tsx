import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';

type WaitingScreenProps = NativeStackScreenProps<StackProps, 'WaitingScreen'>;

const WaitingScreen = ({navigation, route}: WaitingScreenProps) => {
  const {user, setUser, socket} = route.params;

  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    socket.on('quiz_finished', () => {
      setIsFinished(true);
    });
  }, []);

  return (
    <Layout
      navigation={navigation}
      user={user}
      setUser={setUser}
      title={'Добро пожаловать!'}>
      <Text>Ожидание</Text>
    </Layout>
  );
};

export default WaitingScreen;
