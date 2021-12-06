import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type ButtonProps = {
  title: string;
  textStyle?: TextStyle;
  pressableStyle?: ViewStyle;
} & PressableProps;

const Button = ({title, ...args}: ButtonProps) => (
  <Pressable
    style={({pressed}) => {
      return {
        ...styles.button,
        ...args.pressableStyle,
        ...(pressed
          ? {backgroundColor: 'lightgray'}
          : {backgroundColor: 'white'}),
      };
    }}
    onPress={args.onPress}>
    <Text
      style={{
        ...styles.buttonText,
        ...args.textStyle,
      }}>
      {title}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  mainContent: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: 'white',
    marginVertical: 16,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default Button;
