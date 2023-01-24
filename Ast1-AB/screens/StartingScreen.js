import React, { useState } from 'react';
import { View,StyleSheet, Text } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Input from '../components/Input';

const StartingScreen = (props) => {
  const { handleSignUp, email, phone, setEmail, setPhone, handleReset } = props;
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  }

  const handleEmailChange = (email) => {
    setEmail(email);
    if (!validateEmail(email)) {
      setErrorEmail('Invalid email address');
    } else {
      setErrorEmail('');
    }
  }

  const handlePhoneChange = (phone) => {
    setPhone(phone);
    if (!validatePhone(phone)) {
      setErrorPhone('Invalid phone number');
    } else {
      setErrorPhone('');
    }
  }
  const callHandleSignUp = () => {
    if (!validateEmail(email)) {
        setErrorEmail('Invalid email address');
    }
    if (!validatePhone(phone)) {
        setErrorPhone('Invalid phone number');
    } else {
        handleSignUp(email, phone);
    }
  }
  


  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <LabelText style={styles.label}>Email</LabelText>
        <Input
          style={styles.input}
          value={email}
          onChangeText={handleEmailChange}
        />
        {errorEmail !== '' && <Text style={styles.error}>{errorEmail}</Text>}
        <LabelText style={styles.label}>Phone</LabelText>
        <Input
          style={styles.input}
          value={phone}
          onChangeText={handlePhoneChange}
        />
        {errorPhone !== '' && <Text style={styles.error}>{errorPhone}</Text>}
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={handleReset} />
          <Button title="Sign up" onPress={callHandleSignUp} />
        </View>
      </Card>
      </View>
  );
};



const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '80%',
    padding: 20,
    alignItems: 'center',
  },
  label: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    width: '100%',
    marginVertical: 10,
    borderRadius:5
  },
  error: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});


export default StartingScreen