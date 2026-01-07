import React from 'react';
import { StyleSheet, Text } from 'react-native';

const EmptyTournament = () => {
  return <Text style={styles.EmpyText}>No tournaments found</Text>;
};

export default EmptyTournament;

const styles = StyleSheet.create({
  EmpyText: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});
