import React, {useState} from 'react';
import StartScreen from './screens/StartScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectQuizScreen from './screens/SelectQuizScreen';
import ShareScreen from './screens/ShareScreen';
import ConnectScreen from './screens/ConnectScreen';
import QuizScreen from './screens/QuizScreen';
import WaitingScreen from './screens/WaitingScreen';

export type StackProps = {
  StartScreen: undefined;
  SelectQuizScreen: undefined;
  ShareScreen: undefined;
  ConnectScreen: undefined;
  QuizScreen: undefined;
  WaitingScreen: undefined;
};
const Stack = createNativeStackNavigator<StackProps>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{
            headerShown: false,
            title: 'Главная страница',
          }}
        />
        <Stack.Screen
          name="SelectQuizScreen"
          component={SelectQuizScreen}
          options={{
            headerShown: false,
            title: 'Выбор опроса',
          }}
        />
        <Stack.Screen
          name="ShareScreen"
          component={ShareScreen}
          options={{
            headerShown: false,
            title: 'Подключение участников',
          }}
        />
        <Stack.Screen
          name="ConnectScreen"
          component={ConnectScreen}
          options={{
            headerShown: false,
            title: 'Подключение к опросу',
          }}
        />
        <Stack.Screen
          name="WaitingScreen"
          component={WaitingScreen}
          options={{
            headerShown: false,
            title: 'Ожидание других участников',
          }}
        />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{
            headerShown: false,
            title: 'Опрос',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const [user, setUser] = useState(undefined);

  return <Navigation />;
};

export default App;
