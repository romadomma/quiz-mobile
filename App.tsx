import React, {useEffect, useState} from 'react';
import StartScreen from './screens/StartScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectQuizScreen from './screens/SelectQuizScreen';
import ShareScreen from './screens/ShareScreen';
import ConnectScreen from './screens/ConnectScreen';
import QuizScreen from './screens/QuizScreen';
import WaitingScreen from './screens/WaitingScreen';
import LoginScreen from './screens/LoginScreen';
import {User} from './types';
import {QueryClient, QueryClientProvider} from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, Text} from 'react-native';

export type StackProps = {
  LoginScreen: {
    setUser: (user?: User) => Promise<void> | void;
    user?: User;
  };
  StartScreen: {
    setUser: (user?: User) => Promise<void> | void;
    user: User;
  };
  SelectQuizScreen: {
    setUser: (user?: User) => Promise<void> | void;
    user: User;
  };
  ShareScreen: {
    setUser: (user?: User) => Promise<void> | void;
    user: User;
  };
  ConnectScreen: {
    setUser: (user?: User) => Promise<void> | void;
    user: User;
  };
  QuizScreen: {
    setUser: (user?: User) => Promise<void> | void;
    user: User;
  };
  WaitingScreen: {
    setUser: (user?: User) => Promise<void> | void;
    user: User;
  };
};
const Stack = createNativeStackNavigator<StackProps>();

const App = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    const initUser = async () => {
      const userJson = await AsyncStorage.getItem('@user');
      if (userJson) {
        setUser(JSON.parse(userJson));
      }
      setIsReady(true);
    };
    if (!isReady) {
      initUser();
    }
  }, [isReady]);

  if (!isReady) {
    return (
      <>
        <ActivityIndicator size="large" />
        <Text>Загрузка...</Text>
      </>
    );
  }

  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: 'Вход в приложение',
              gestureEnabled: false,
            }}
            initialParams={{
              setUser,
              user,
            }}
          />
          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            options={{
              title: 'Главная страница',
              gestureEnabled: false,
            }}
            initialParams={{
              setUser,
              user,
            }}
          />
          <Stack.Screen
            name="SelectQuizScreen"
            component={SelectQuizScreen}
            options={{
              title: 'Выбор опроса',
            }}
            initialParams={{
              setUser,
              user,
            }}
          />
          <Stack.Screen
            name="ShareScreen"
            component={ShareScreen}
            options={{
              title: 'Подключение участников',
            }}
            initialParams={{
              setUser,
              user,
            }}
          />
          <Stack.Screen
            name="ConnectScreen"
            component={ConnectScreen}
            options={{
              title: 'Подключение к опросу',
            }}
            initialParams={{
              setUser,
              user,
            }}
          />
          <Stack.Screen
            name="WaitingScreen"
            component={WaitingScreen}
            options={{
              title: 'Ожидание других участников',
            }}
            initialParams={{
              setUser,
              user,
            }}
          />
          <Stack.Screen
            name="QuizScreen"
            component={QuizScreen}
            options={{
              title: 'Опрос',
              gestureEnabled: false,
            }}
            initialParams={{
              setUser,
              user,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
