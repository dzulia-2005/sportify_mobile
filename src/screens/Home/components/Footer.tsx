import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from '../styles/FooterStyles';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.divider} />

      <View style={styles.socials}>
        <Icon name="github" size={22} color="#3B82F6" />
        <Icon name="instagram" size={22} color="#3B82F6" />
        <Icon name="mail" size={22} color="#3B82F6" />
      </View>

      <Text style={styles.text}>© 2026 SportZone. All rights reserved.</Text>
      <Text style={styles.subText}>Built with by Nikoloz Dzuliashvili</Text>
    </View>
  );
};

export default Footer;
