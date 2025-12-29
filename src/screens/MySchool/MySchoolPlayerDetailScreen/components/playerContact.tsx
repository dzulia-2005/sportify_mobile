import React from 'react';
import { View, Text } from 'react-native';
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

const PlayerContact = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Parent Information</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Parent Name</Text>
        <Text style={styles.value}>
          {mockPlayer.parentFirstName} {mockPlayer.parentLastName}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{mockPlayer.parentPhoneNumber}</Text>
      </View>
    </View>
  );
};

export default PlayerContact;
