import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export type ButtonProps = {
  title: string;
  textStyle?: TextStyle;
  pressableStyle?: ViewStyle;
  icon?: string;
} & PressableProps;

const Button = ({title, icon, ...args}: ButtonProps) => (
  <Pressable
    style={({pressed}) => {
      return {
        ...styles.button,
        ...args.pressableStyle,
        ...(pressed && {backgroundColor: 'lightgray'}),
        ...(args.disabled && {backgroundColor: 'lightgray', opacity: 0.5}),
      };
    }}
    onPress={args.onPress}
    disabled={args.disabled}>
    <Text
      style={{
        ...styles.buttonText,
        ...args.textStyle,
      }}>
      {icon && <Icon name={icon} size={16} />}
      {title}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
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
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default Button;
