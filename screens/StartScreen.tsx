import React from 'react';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import {StyleSheet, View} from 'react-native';

type StartScreenProps = NativeStackScreenProps<StackProps, 'StartScreen'>;

const StartScreen = ({navigation}: StartScreenProps) => {
  return (
    <Layout navigation={navigation} title={'Добро пожаловать!'}>
      <View style={styles.root}>
        <Button
          title={'Создать'}
          onPress={() => navigation.navigate('SelectQuizScreen')}
          pressableStyle={styles.button}
        />
        <Button
          title={'Подключиться к опросу'}
          onPress={() => navigation.navigate('ConnectScreen')}
          pressableStyle={styles.button}
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
  button: {
    width: '100%',
  },
});

export default StartScreen;
