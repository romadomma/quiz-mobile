import React from 'react';
import {ActivityIndicator, Text} from 'react-native';

const Loader = () => (
  <>
    <ActivityIndicator size="large" />
    <Text>Загрузка...</Text>
  </>
);

export default Loader;
