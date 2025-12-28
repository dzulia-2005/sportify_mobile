import React from 'react';
import { StatusBar, Text } from 'react-native';
import { styles } from '../styles/LoginStyles';

const Header: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Sportify</Text>
      <Text style={styles.subtitle}>Login your account</Text>
    </>
  );
};

export default Header;
