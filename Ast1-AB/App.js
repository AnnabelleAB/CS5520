import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartingScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import { useState } from 'react';

export default function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPhone, setErrorPhone] = useState('');

  const handleSignUp = (email, phone) => {
    setIsSignedUp(true);
    setEmail(email);
    setPhone(phone);
  }

  const handleReset = () => {
    setEmail('');
    setPhone('');
    setErrorEmail('');
    setErrorPhone('');
    setIsSignedUp(false);
  }
  return (
    <View style={styles.container}>
      {!isSignedUp ? (
        <StartingScreen
          handleSignUp={handleSignUp}
          email={email}
          phone={phone}
          setEmail={setEmail}
          setPhone={setPhone}
          handleReset={handleReset} />
      ) : (
        <ConfirmScreen
          email={email}
          phone={phone}
          isSignedUp={isSignedUp}
          setEmail={setEmail}
          setPhone={setPhone}
            setIsSignedUp={setIsSignedUp}
            handleReset={handleReset}
        />
      )}
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
