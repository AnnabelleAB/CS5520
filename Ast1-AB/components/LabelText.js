import React from 'react';
import { Text } from 'react-native';

const LabelText = ({ children, style }) => {
  return (
    <Text style={[styles.label, style]}>{children}</Text>
  );
};

const styles = {
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
};

export default LabelText;
