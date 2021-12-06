import React from 'react';
import StartScreen from './screens/StartScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectQuizScreen from './screens/SelectQuizScreen';
import ShareScreen from './screens/ShareScreen';

export type StackProps = {
  Start: undefined;
  SelectQuizScreen: undefined;
  ShareScreen: undefined;
};
const Stack = createNativeStackNavigator<StackProps>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectQuizScreen"
          component={SelectQuizScreen}
          options={{
            headerShown: false,
            title: 'Выбор опроса',
            headerBackTitle: 'Назад',
          }}
        />
        <Stack.Screen
          name="ShareScreen"
          component={ShareScreen}
          options={{
            headerShown: false,
            title: 'Подключение участников',
            headerBackTitle: 'Назад',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <Navigation />;
};

export default App;
