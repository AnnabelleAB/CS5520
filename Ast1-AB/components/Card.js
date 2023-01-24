import React from 'react';
import { View } from 'react-native';

const Card = ({ children, style }) => {
  return (
    <View style={[styles.card, style]}>{children}</View>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
  },
};

export default Card;