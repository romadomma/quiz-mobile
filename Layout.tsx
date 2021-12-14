import React, {ReactNode} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackProps} from './App';
import Icon from 'react-native-vector-icons/EvilIcons';
import {User} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LayoutProps = {
  children: ReactNode;
  isScrollable?: boolean;
  showBackButton?: boolean;
  title?: string;
  user?: User;
  setUser: (user?: User) => Promise<void> | void;
  navigation: NativeStackNavigationProp<
    StackProps,
    | 'SelectQuizScreen'
    | 'StartScreen'
    | 'QuizScreen'
    | 'ShareScreen'
    | 'ConnectScreen'
    | 'LoginScreen'
    | 'WaitingScreen'
  >;
};

const Layout = ({
  navigation,
  children,
  isScrollable = false,
  showBackButton = false,
  title,
  user,
  setUser,
}: LayoutProps) => {
  const contentView = isScrollable ? (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  ) : (
    <View style={styles.staticContent}>{children}</View>
  );

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        {user && (
          <Pressable
            style={styles.userContent}
            onPress={() =>
              Alert.alert(
                'Выход',
                'Вы уверены что хотите выйти из учетной записи?',
                [
                  {
                    text: 'Отмена',
                    style: 'cancel',
                  },
                  {
                    text: 'Ок',
                    onPress: () => {
                      AsyncStorage.clear();
                      setUser(undefined);
                      navigation.reset({
                        index: 0,
                        routes: [{name: 'LoginScreen', params: {setUser}}],
                      });
                      // navigation.navigate('LoginScreen', {setUser});
                    },
                  },
                ],
              )
            }>
            <Icon name="user" size={32} />
            <Text style={styles.userNickname}>{user.nickname}</Text>
          </Pressable>
        )}
        {showBackButton && (
          <Icon name="arrow-left" size={32} onPress={navigation.goBack} />
        )}
        {title && <Text style={styles.titleText}>{title}</Text>}
      </View>
      {contentView}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#eeeeee',
  },
  header: {
    margin: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    height: 48,
  },
  userContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  userNickname: {
    fontSize: 20,
  },
  titleText: {
    width: '100%',
    marginTop: 16,
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
  },
  staticContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    flexGrow: 3,
    height: 1,
  },
  scrollContainer: {
    flexGrow: 3,
    marginHorizontal: 16,
    height: 1,
  },
  scrollContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Layout;
