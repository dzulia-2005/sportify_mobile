import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/aboutUs.style';

const Footer: React.FC = () => {
  return (
    <Text style={styles.footer}>
      © {new Date().getFullYear()} Sportify. All rights reserved.
    </Text>
  );
};

export default Footer;
