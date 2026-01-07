import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/mainStyles';
import Header from '../components/Header';
import TeamCard from '../components/TeamCard';

const MySchoolTeams: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.CardListContainer}>
        <TeamCard />
      </View>
    </View>
  );
};

export default MySchoolTeams;
