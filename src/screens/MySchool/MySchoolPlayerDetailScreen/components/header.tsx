import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/index.styles';
import { HeaderProp } from '../types/index.type';

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

const Header: React.FC<HeaderProp> = ({ imageSource }) => {
  return (
    <View style={styles.avatarContainer}>
      <Image source={imageSource} style={styles.avatar} />
      <Text style={styles.name}>
        {mockPlayer.firstName} {mockPlayer.lastName}
      </Text>
      <Text style={styles.position}>{mockPlayer.position}</Text>
      <Text style={styles.team}>{mockPlayer.teamName}</Text>
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteBtn}>
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
