import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ტურნირის შედეგები</Text>
      <Text style={styles.subtitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: -0.5,
  },
  subtitle: {
    color: '#ffffffb3',
    marginTop: 8,
    fontSize: 14,
  },
});

export default Header;
