import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/LoginStyles';
import Header from '../components/Header';
import Inputs from '../components/Inputs';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Inputs />
    </View>
  );
};

export default LoginScreen;
