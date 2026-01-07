import React from 'react';
import { StyleSheet, Text } from 'react-native';

const NotFoundText = () => {
  return <Text style={styles.notFoundText}>Teams Not Found</Text>;
};

export default NotFoundText;

const styles = StyleSheet.create({
  notFoundText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
  },
});
