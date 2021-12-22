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
  const [progressTimer, setProgressTimer] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    ws.on('next_round', (newQuestion?: Question) => {
      if (question) {
        setQuestion(newQuestion);
        setProgress(0);
        if (progressTimer) {
          clearTimeout(progressTimer);
        }
        setProgressTimer(
          // @ts-ignore
          setInterval(() => {
            setProgress(progress + 1 / (roundTime * 2));
          }, 500),
        );
      } else {
        ws.close();
        navigation.navigate('StartScreen', {user, setUser});
      }
    });
  }, []);

  const content = question ? (
    <View style={styles.root}>
      {/*вопрос*/}
      <View style={styles.question}>
        <Text style={styles.questionText}>{question.text}</Text>
      </View>
      {/*время*/}
      <Bar progress={progress} />
      {/*ответы*/}
      <View style={styles.answers}>
        {question.answers.map(answer => (
          <Button
            key={answer.id}
            pressableStyle={styles.answer}
            textStyle={styles.answerText}
            title={answer.text}
            onPress={() => {
              ws.emit('answer_sent', {userId: user.id, answerId: answer.id});
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
  },
  timeLine: {
    width: '100%',
    height: 16,
    backgroundColor: '#f3a832',
    borderRadius: 6,
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
