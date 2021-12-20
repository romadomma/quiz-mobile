import React, {useEffect, useState} from 'react';
import {Alert, Platform, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import Input from '../components/Input';
import {createSocket} from '../socket';
import FormInput from '../components/FormInput';
import {useForm} from 'react-hook-form';

const CONNECTION_CODE_LENGTH = 6;

type ConnectScreenProps = NativeStackScreenProps<StackProps, 'ConnectScreen'>;

const ConnectScreen = ({navigation, route}: ConnectScreenProps) => {
  const {user, setUser} = route.params;
  const [connectionCode, setConnectionCode] = useState('');
  const {control, handleSubmit} = useForm();
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
      title={'Введите код подключения'}>
      <View style={styles.root}>
        <FormInput
          placeholder="Код"
          controller={{
            name: 'code',
            control,
            defaultValue: '',
          }}
          maxLength={CONNECTION_CODE_LENGTH}
          style={styles.codeInput}
          onChangeText={code => setConnectionCode(code.toUpperCase())}
          value={connectionCode}
          autoCapitalize="none"
        />
        <Button
          title={'Подключиться к опросу'}
          onPress={handleSubmit<{code: string}>(({code}) => {
            const ws = createSocket(user);
            ws.emit('client_connect', {userId: user.id});
            // ws.on()
            navigation.navigate('QuizScreen', {user, setUser, socket: ws});
          })}
          pressableStyle={styles.connectButton}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    height: '100%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeInput: {
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
  },
  connectButton: {
    width: '100%',
  },
});

export default ConnectScreen;
