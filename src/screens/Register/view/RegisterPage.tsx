import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/RegisterStyles';
import Header from '../components/Header';
import Input from '../components/Input';

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Input />
    </View>
  );
};

export default Register;
