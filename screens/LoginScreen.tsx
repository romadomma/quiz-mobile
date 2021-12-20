import React, {useEffect, useState} from 'react';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import {StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';
import FormInput from '../components/FormInput';
import {useMutation} from 'react-query';
import login, {LoginProps} from '../api/login';
import {User} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';

type LoginScreenProps = NativeStackScreenProps<StackProps, 'LoginScreen'>;

const LoginScreen = ({navigation, route}: LoginScreenProps) => {
  const {user: appUser, setUser: setAppUser} = route.params;
  const [user, setUser] = useState<User | undefined>(undefined);
  const {control, handleSubmit} = useForm();
  const {isLoading, mutate} = useMutation('/auth/login', login, {
    onSuccess: (newUser: User) => {
      setUser(newUser);
      setAppUser(newUser);
      AsyncStorage.setItem('@user', JSON.stringify(newUser));
    },
  });

  useEffect(() => {
    if (appUser && !user) {
      setUser(appUser);
    }
    if (user) {
      navigation.navigate('StartScreen', {user, setUser: setAppUser});
    }
  }, [user, appUser]);

  const content = isLoading ? (
    <Loader />
  ) : (
    <View style={styles.root}>
      <FormInput
        placeholder="Email"
        controller={{
          name: 'email',
          control,
          defaultValue: '',
        }}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        placeholder="Пароль"
        controller={{
          name: 'password',
          control,
          defaultValue: '',
        }}
        style={styles.input}
        secureTextEntry
      />
      <Button
        title="Вход"
        style={styles.button}
        onPress={handleSubmit<LoginProps>(data => mutate(data))}
      />
    </View>
  );

  return (
    <Layout
      navigation={navigation}
      user={user}
      setUser={setUser}
      title={'Вход в приложение'}>
      {content}
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

export default LoginScreen;
