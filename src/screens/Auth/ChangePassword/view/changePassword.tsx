import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/index.styles';
import Header from '../components/Header';
import Form from '../components/Form';

const ChangePasswordScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Form />
    </View>
  );
};

export default ChangePasswordScreen;
