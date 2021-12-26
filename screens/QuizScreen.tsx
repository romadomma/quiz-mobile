import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';
import {Question} from '../types';
import Loader from '../components/Loader';
import {Bar} from 'react-native-progress';

type StartScreenProps = NativeStackScreenProps<StackProps, 'QuizScreen'>;

const QuizScreen = ({navigation, route}: StartScreenProps) => {
  const {user, setUser, roundTime, socket: ws} = route.params;
  const [question, setQuestion] = useState<Question | undefined>(undefined);
  const [progress, setProgress] = useState(0);
  const [answerSent, setAnswerSent] = useState(false);
  const [progressTimer, setProgressTimer] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    ws.on('next_question', (newQuestion: Question) => {
      setQuestion(newQuestion);
      setProgress(0);
      setAnswerSent(false);
      // @ts-ignore
      setProgressTimer(prevTimer => {
        if (prevTimer) {
          clearInterval(prevTimer);
        }
        // @ts-ignore
        return setInterval(() => {
          setProgress(prevProgress => {
            console.log(prevProgress);
            return prevProgress + 1 / (roundTime * 8);
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

  const content = question ? (
    <View style={styles.root}>
      {/*вопрос*/}
      <View style={styles.question}>
        <Text style={styles.questionText}>{question.text}</Text>
      </View>
      {/*время*/}
      <Bar
        progress={progress}
        style={styles.progressBar}
        width={250}
        height={8}
      />
      {/*ответы*/}
      <View style={styles.answers}>
        {question.answers.map(answer => (
          <Button
            key={answer.id}
            pressableStyle={styles.answer}
            textStyle={styles.answerText}
            title={answer.text}
            disabled={answerSent}
            onPress={() => {
              setAnswerSent(true);
              ws.emit('answer_sent', {
                userId: user.id,
                answerId: answer.id,
              });
            }}
          />
        ))}
      </View>
    </View>
  ) : (
    <Loader />
  );

  return (
    <Layout navigation={navigation} user={user} setUser={setUser}>
      {content}
    </Layout>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  question: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: 'white',
    width: '100%',
    height: '40%',
  },
  questionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  progressBar: {
    marginVertical: 16,
  },
  answers: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  answer: {
    width: '45%',
    maxHeight: '40%',
    height: '40%',
  },
  answerText: {
    fontWeight: 'normal',
  },
});

export default QuizScreen;
