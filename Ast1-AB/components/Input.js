import React from 'react';
import { TextInput } from 'react-native';
import colors from '../colors';
const Input = ({ value, onChangeText, style }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
    />

  );
};

const styles = {
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
};

export default Input;