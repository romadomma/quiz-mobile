import React from 'react';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import {StyleSheet, View} from 'react-native';
import Input from '../components/Input';

type LoginScreenProps = NativeStackScreenProps<StackProps, 'LoginScreen'>;

const StartScreen = ({navigation}: LoginScreenProps) => {
  return (
    <Layout navigation={navigation} title={'Вход в приложение'}>
      <View style={styles.root}>
        <Input placeholder="Email" style={styles.input} autoCapitalize="none" />
        <Input placeholder="Пароль" style={styles.input} secureTextEntry />
        <Button
          title="Вход"
          style={styles.button}
          onPress={() => navigation.navigate('StartScreen')}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '70%',
  },
  input: {
    width: '100%',
  },
  button: {
    width: '100%',
  },
});

export default StartScreen;
