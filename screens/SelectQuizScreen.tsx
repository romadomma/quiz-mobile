import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';
import Layout from '../Layout';

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
    <Layout
      navigation={navigation}
      showBackButton
      isScrollable
      title={'Выберите опрос'}>
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
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation)}
        />
        <Button
          title={'Опрос 3'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation)}
        />
        <Button
          title={'Опрос 5'}
          pressableStyle={styles.buttonStyle}
          onPress={goToShareScreen(navigation)}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '60%',
  },
  mainContent: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});

export default SelectQuizScreen;
