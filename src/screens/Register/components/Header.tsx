import React from 'react';
import { StatusBar, Text } from 'react-native';
import { styles } from '../styles/RegisterStyles';

const Header: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Sportify</Text>
      <Text style={styles.subtitle}>Create Account</Text>
    </>
  );
};

export default Header;
