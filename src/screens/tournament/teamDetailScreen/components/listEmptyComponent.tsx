import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/teamDetail.style';

const ListEmptyComponent: React.FC = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>There are no players.</Text>
      <Text style={styles.emptySubtitle}>
        Add the first player to this team
      </Text>
    </View>
  );
};

export default ListEmptyComponent;
