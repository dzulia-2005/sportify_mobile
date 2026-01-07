import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import { styles } from '../styles/mainStyles';
import TeamCard from '../components/TeamCard';

const TournamentMatches: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.CardListContainer}>
        <TeamCard />
      </View>
    </View>
  );
};

export default TournamentMatches;
