import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import FinishScreen from './FinishScreen';
import StartingScreen from './StartingScreen';

const ConfirmScreen = (props) => {
  const { email, phone, isSignedUp, setEmail, setPhone, setIsSignedUp, handleReset } = props;
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isFinishedLater, setIsFinishedLater] = useState(false);

  const GoBack = () => {
    setEmail(email);
    setPhone(phone);
    setIsSignedUp(false);

  }

  const Confirm = () => {
    setIsConfirmed(true);
    setIsSignedUp(true);
  }

  const FinishLater = () => {
    setIsFinishedLater(true);
    setIsSignedUp(true);
  }

  if (!isSignedUp) {
    return <StartingScreen email={email} phone={phone} setEmail={setEmail} setPhone={setPhone} setIsSignedUp={setIsSignedUp} />
  }
  if (isConfirmed || isFinishedLater) {
    return <FinishScreen isConfirmed={isConfirmed} phone={phone} handleReset={handleReset} />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have entered:</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>Phone: {phone}</Text>
      <Text style={styles.text}>Please confirm they are correct</Text>
      <Button title="Go back" onPress={GoBack}/>
      <Button title="Confirm" onPress={Confirm} />
      <Button title="Finish Later" onPress={FinishLater} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});


export default ConfirmScreen;
