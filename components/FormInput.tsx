import React from 'react';
import {StyleSheet, TextInputProps} from 'react-native';
import {Control, useController} from 'react-hook-form';
import Input from './Input';

type ControlProps = {
  controller: {
    control: Control;
    name: string;
    defaultValue?: string;
  };
};

const FormInput = (props: TextInputProps & ControlProps) => {
  const {field} = useController(props.controller);
  const style = {
    ...styles.textInput,
    ...(typeof props.style === 'object' ? props.style : {}),
  };
  return (
    <Input
      {...props}
      style={style}
      value={field.value}
      onChangeText={field.onChange}
    />
  );
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

export default FormInput;
