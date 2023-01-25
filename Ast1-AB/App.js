import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartingScreen from './screens/StartingScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import { useState } from 'react';
import colors from './colors';
import { LinearGradient } from 'expo-linear-gradient';
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

    <LinearGradient
      // Button Linear Gradient
      colors={['#B9F3FC', '#AEE2FF', '#93C6E7']}
      style={styles.container}
    >
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

    </LinearGradient>
  )
};
const styles = StyleSheet.create({
  background: {
    width: '100%'
  },

  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
