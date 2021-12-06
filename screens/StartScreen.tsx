import React from 'react';
import {
  Alert,
  DynamicColorIOS,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';

type StartScreenProps = NativeStackScreenProps<StackProps, 'Start'>;

const StartScreen = ({navigation}: StartScreenProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const barStyle = DynamicColorIOS({
    light: '#eeeeee',
    dark: '#111111',
  });
  return (
    <SafeAreaView style={{backgroundColor: barStyle}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.mainContent}>
        <Button
          title={'Создать'}
          // @ts-ignore
          onPress={() => navigation.navigate('SelectQuizScreen')}
        />
        <Button
          title={'Подключиться к опросу'}
          onPress={() => Alert.alert('Подключаемся к опросу')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartScreen;
