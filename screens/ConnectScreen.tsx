import React, {useState} from 'react';
import {Alert, Platform, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import Input from '../components/Input';

const CONNECTION_CODE_LENGTH = 6;

type ConnectScreenProps = NativeStackScreenProps<StackProps, 'ConnectScreen'>;

const ConnectScreen = ({navigation, route}: ConnectScreenProps) => {
  const {user, setUser} = route.params;
  const [connectionCode, setConnectionCode] = useState('');
  return (
    <Layout
      navigation={navigation}
      user={user}
      setUser={setUser}
      showBackButton
      title={'Введите код подключения'}>
      <View style={styles.root}>
        <Input
          maxLength={CONNECTION_CODE_LENGTH}
          style={styles.codeInput}
          onChangeText={code => setConnectionCode(code.toUpperCase())}
          value={connectionCode}
        />
        <Button
          title={'Подключиться к опросу'}
          onPress={() => navigation.navigate('QuizScreen', {user, setUser})}
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
