import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import Button from '../components/Button';
import Clipboard from '@react-native-clipboard/clipboard';

const ShareScreen = () => {
  const connectCode = 'FJDCE2';

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Подключение к опросу</Text>
      </View>
      <View>
        <Button
          title={connectCode}
          onPress={() => Clipboard.setString(connectCode)}
        />
      </View>
      <View>
        <Text>Подключено N человек</Text>
      </View>
      <Button title={'Начать опрос'} />
    </SafeAreaView>
  );
};

export default ShareScreen;
