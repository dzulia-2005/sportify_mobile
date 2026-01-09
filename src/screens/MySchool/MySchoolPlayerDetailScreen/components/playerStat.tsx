import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/index.styles';
import { PlayerStatProp } from '../types/index.type';

const PlayerStat: React.FC<PlayerStatProp> = ({ Player }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Statistics</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Matches Played</Text>
        <Text style={styles.value}>{Player?.matchesPlayed}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Goals</Text>
        <Text style={styles.value}>{Player?.goals}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Assists</Text>
        <Text style={styles.value}>{Player?.assists}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Yellow Cards</Text>
        <Text style={styles.value}>{Player?.yellowCards}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Red Cards</Text>
        <Text style={styles.value}>{Player?.redCards}</Text>
      </View>
    </View>
  );
};

export default PlayerStat;
