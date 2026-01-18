import React from 'react';
import { StatusBar, Text } from 'react-native';
import { styles } from '../styles/index.styles';

const Header: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Sportify</Text>
      <Text style={styles.subtitle}>Change your Password</Text>
    </>
  );
};

export default Header;
