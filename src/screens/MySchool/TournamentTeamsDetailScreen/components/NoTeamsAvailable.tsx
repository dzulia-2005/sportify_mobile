import React from 'react';
import { styles } from '../styles/index.style';
import { Text, View } from 'react-native';

const NoTeamsAvailable: React.FC = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No teams available</Text>
    </View>
  );
};

export default NoTeamsAvailable;
