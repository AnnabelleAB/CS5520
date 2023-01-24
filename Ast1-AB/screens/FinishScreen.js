import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
const FinishScreen = ({ isConfirmed, phone, handleReset }) => {
  const lastDigit = phone.slice(-1);


  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        {isConfirmed ? (
          <>
            <Text style={styles.text}>Thank you!</Text>
            <Image
              source={{ uri: `https://picsum.photos/id/${lastDigit}/100/100` }}
              style={styles.image}
            />
          </>
        ) : (
          <>
            <Text style={styles.text}> to see you go!</Text>
            <Image source={require('../assets/sad-cat.gif')} style={styles.image} />
          </>
        )}
        <Button title="Start again" onPress={handleReset} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default FinishScreen;
