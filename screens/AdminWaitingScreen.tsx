import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import {Bar} from 'react-native-progress';
import {Question} from '../types';

type AdminWaitingScreenProps = NativeStackScreenProps<
  StackProps,
  'AdminWaitingScreen'
>;

const AdminWaitingScreen = ({navigation, route}: AdminWaitingScreenProps) => {
  const {user, setUser, socket: ws} = route.params;
  const [progress, setProgress] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [progressTimer, setProgressTimer] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    ws.on('next_question', (newQuestion: Question) => {
      setQuestionNumber(newQuestion.number);
      setProgress(0);
      // @ts-ignore
      setProgressTimer(prevTimer => {
        if (prevTimer) {
          clearInterval(prevTimer);
        }
        // @ts-ignore
        return setInterval(() => {
          setProgress(prevProgress => {
            console.log(prevProgress);
            return prevProgress + 1 / (30 * 8);
          });
        }, 125);
      });
    });
    ws.on('quiz_finished', () => {
      if (progressTimer) {
        clearInterval(progressTimer);
      }
      ws.close();
      navigation.navigate('StartScreen', {user, setUser});
    });
  }, []);

  return (
    <Layout
      navigation={navigation}
      user={user}
      setUser={setUser}
      title={'Опрос запущен'}>
      <Text>Ожидание окончания опроса</Text>
      <Text>Вопрос: {questionNumber}</Text>
      <Bar progress={progress} style={styles.bar} width={250} height={8} />
    </Layout>
  );
};

export default AdminWaitingScreen;

const styles = StyleSheet.create({
  bar: {
    marginVertical: 16,
  },
});
