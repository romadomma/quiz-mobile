import React from 'react';
import {View, Text} from 'react-native';
import Button from '../components/Button';
import Clipboard from '@react-native-clipboard/clipboard';
import Layout from '../Layout';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';

type ShareScreenProps = NativeStackScreenProps<StackProps, 'ShareScreen'>;

const ShareScreen = ({navigation}: ShareScreenProps) => {
  const connectCode = 'FJDCE2';

  return (
    // Прокинуть в параметры объект опроса и брать title из него
    <Layout navigation={navigation} showBackButton title={'Опрос 1'}>
      <View>
        <Text>Код для подключения к опросу</Text>
      </View>
      <View>
        <Button
          title={connectCode}
          icon="copy1"
          onPress={() => Clipboard.setString(connectCode)}
        />
      </View>
      <View>
        <Text>Подключено N человек</Text>
      </View>
      <Button title={'Начать опрос'} />
    </Layout>
  );
};

export default ShareScreen;
