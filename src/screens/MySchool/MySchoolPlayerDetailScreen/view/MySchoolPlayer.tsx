import React from 'react';
import { ScrollView, ImageSourcePropType } from 'react-native';
import UserEmptyIcon from '../../../../shared/assets/images/icon-7797704_640.png';
import Header from '../components/header';
import { styles } from '../styles/index.styles';
import PlayerStat from '../components/playerStat';

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

const MySchoolPlayer = () => {
  const imageSource: ImageSourcePropType = mockPlayer.profilePictureUrl
    ? { uri: mockPlayer.profilePictureUrl }
    : UserEmptyIcon;

  return (
    <ScrollView style={styles.container}>
      <Header imageSource={imageSource} />
      <PlayerStat />
    </ScrollView>
  );
};

export default MySchoolPlayer;
