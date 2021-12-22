import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../components/Button';
import Clipboard from '@react-native-clipboard/clipboard';
import Layout from '../Layout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import {Socket} from 'socket.io-client';
import Loader from '../components/Loader';
import {createSocket} from '../socket';

export type ShareScreenProps = NativeStackScreenProps<
  StackProps,
  'ShareScreen'
>;

const ShareScreen = ({navigation, route}: ShareScreenProps) => {
  const {user, setUser, quiz} = route.params;
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const [connectionsAmount, setConnectionsAmount] = useState(0);
  const [roomCode, setRoomCode] = useState('');
  useEffect(() => {
    const ws = createSocket(user);
    ws.on('connect', () => {
      setSocket(ws);
      ws.emit('room_create', {
        adminId: user.id,
        quizId: quiz.id,
      });
    });
    ws.on('room_created', code => {
      setRoomCode(code);
    });
    ws.on('client_connected', amount => {
      setConnectionsAmount(amount);
    });
    ws.on('quiz_started', () => {
      navigation.navigate('WaitingScreen', {setUser, user, socket: ws});
    });
  }, []);
  return (
    <Layout
      navigation={navigation}
      user={user}
      setUser={setUser}
      showBackButton
      title={quiz.title}>
      {socket ? (
        <>
          <View>
            <Text>Код для подключения к опросу</Text>
          </View>
          <View>
            <Button
              title={roomCode}
              icon="copy1"
              onPress={() => Clipboard.setString(roomCode)}
            />
          </View>
          <View>
            <Text>Подключено {connectionsAmount} человек</Text>
          </View>
          <Button
            title={'Начать опрос'}
            onPress={() => {
              socket.emit('quiz_start', {code: roomCode});
            }}
          />
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default ShareScreen;
