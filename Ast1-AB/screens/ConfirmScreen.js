import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import Button from '../components/Button';
import FinishScreen from './FinishScreen';
import StartingScreen from './StartingScreen';
import Card from '../components/Card';
const ConfirmScreen = (props) => {
  const { email, phone, isSignedUp, setEmail, setPhone, setIsSignedUp, handleReset } = props;
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isFinishedLater, setIsFinishedLater] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const GoBack = () => {
    setModalVisible(false);
    setEmail(email);
    setPhone(phone);
    setIsSignedUp(false);

  }

  const Confirm = () => {
    setModalVisible(false);
    setIsConfirmed(true);
    setIsSignedUp(true);
  }

  const FinishLater = () => {
    setModalVisible(false);
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
    <Modal visible={modalVisible}
      animationType="slide"
      transparent={true}>
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
          <Text style={styles.text}>You have entered:</Text>
          <Text style={styles.text}>Email: {email}</Text>
          <Text style={styles.text}>Phone: {phone}</Text>
          <Text style={styles.text}>Please confirm they are correct</Text>
          <Button title="Go back" onPress={GoBack} />
          <Button title="Confirm" onPress={Confirm} />
          <Button title="Finish Later" onPress={FinishLater} />
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    rowGap: '10'

  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },

});


export default ConfirmScreen;
