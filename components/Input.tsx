import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

const Input = (props: TextInputProps) => {
  const style = {
    ...styles.textInput,
    ...(typeof props.style === 'object' ? props.style : {}),
  };
  return <TextInput {...props} style={style} />;
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: 'white',
    marginVertical: 16,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default Input;
