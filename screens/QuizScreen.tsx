import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

type StartScreenProps = NativeStackScreenProps<StackProps, 'QuizScreen'>;

const QuizScreen = ({navigation}: StartScreenProps) => {
  return (
    <Layout navigation={navigation}>
      <View style={styles.root}>
        {/*вопрос*/}
        <View style={styles.question}>
          <Text style={styles.questionText}>Вопрос хороший</Text>
        </View>
        {/*время*/}
        <View style={styles.timeLine} />
        {/*ответы*/}
        <View style={styles.answers}>
          <Button
            pressableStyle={styles.answer}
            textStyle={styles.answerText}
            title="Ответ 1"
          />
          <Button
            pressableStyle={styles.answer}
            textStyle={styles.answerText}
            title="Ответ 2"
          />
          <Button
            pressableStyle={styles.answer}
            textStyle={styles.answerText}
            title="Ответ 3"
          />
          <Button
            pressableStyle={styles.answer}
            textStyle={styles.answerText}
            title="Ответ 4"
          />
        </View>
      </View>
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
