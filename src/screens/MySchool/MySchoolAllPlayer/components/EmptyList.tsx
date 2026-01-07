import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EmptyList = () => {
  return (
    <View style={styles.notFoundTextContainer}>
      <Text style={styles.notfoundText}>Players Not Found</Text>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  notFoundTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  notfoundText: {
    color: '#999',
    fontSize: 14,
  },
});
