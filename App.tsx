import React, {useState} from 'react';
import StartScreen from './screens/StartScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectQuizScreen from './screens/SelectQuizScreen';
import ShareScreen from './screens/ShareScreen';
import ConnectScreen from './screens/ConnectScreen';
import QuizScreen from './screens/QuizScreen';
import WaitingScreen from './screens/WaitingScreen';
import LoginScreen from './screens/LoginScreen';

export type StackProps = {
  LoginScreen: undefined;
  StartScreen: undefined;
  SelectQuizScreen: undefined;
  ShareScreen: undefined;
  ConnectScreen: undefined;
  QuizScreen: undefined;
  WaitingScreen: undefined;
};
const Stack = createNativeStackNavigator<StackProps>();

const Navigation = () => {
  // TODO если есть юзер, то StartScreen, иначе LoginScreen
  // const initialRoute = 'StartScreen';
  const initialRoute = 'LoginScreen';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            title: 'Вход в приложение',
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{
            headerShown: false,
            title: 'Главная страница',
            gestureEnabled: false,
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
            gestureEnabled: false,
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
