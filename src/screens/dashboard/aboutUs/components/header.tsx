import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/aboutUs.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Icon name="soccer" size={48} color="#2563EB" />
      <Text style={styles.title}>Sportify</Text>
      <Text style={styles.subtitle}>
        Your all-in-one sports management platform
      </Text>
    </View>
  );
};

export default Header;
