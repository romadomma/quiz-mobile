import React from 'react';
import {SafeAreaView, StatusBar, View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';

type SelectQuizScreenProps = NativeStackScreenProps<
  StackProps,
  'SelectQuizScreen'
>;

const goToShareScreen =
  ({navigate}: SelectQuizScreenProps['navigation']) =>
  () =>
    // @ts-ignore
    navigate('ShareScreen');

const SelectQuizScreen = ({navigation}: SelectQuizScreenProps) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.title}>
        <Text style={styles.titleText}>Выберите опрос</Text>
      </View>
      <View style={styles.mainContent}>
        <Button
          title={'Опрос 1'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation)}
        />
        <Button
          title={'Опрос 2'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '60%',
  },
  titleText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  title: {
    width: '100%',
    paddingVertical: 15,
    display: 'flex',
    alignItems: 'center',
  },
  mainContent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});

export default SelectQuizScreen;
