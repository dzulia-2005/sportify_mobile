import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/index.styles';

const mockPlayer = {
  id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  mySchoolId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  teamId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  teamName: 'U16 Team',
  firstName: 'Nikoloz',
  lastName: 'Dzuliashvili',
  profilePictureUrl: '',
  position: 'Goalkeeper',
  parentFirstName: 'Giorgi',
  parentLastName: 'Dzuliashvili',
  parentPhoneNumber: '+995 599 12 34 56',
  goals: 0,
  assists: 0,
  matchesPlayed: 12,
  yellowCards: 1,
  redCards: 0,
};

const PlayerStat = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Statistics</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Matches Played</Text>
        <Text style={styles.value}>{mockPlayer.matchesPlayed}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Goals</Text>
        <Text style={styles.value}>{mockPlayer.goals}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Assists</Text>
        <Text style={styles.value}>{mockPlayer.assists}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Yellow Cards</Text>
        <Text style={styles.value}>{mockPlayer.yellowCards}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Red Cards</Text>
        <Text style={styles.value}>{mockPlayer.redCards}</Text>
      </View>
    </View>
  );
};

export default PlayerStat;
