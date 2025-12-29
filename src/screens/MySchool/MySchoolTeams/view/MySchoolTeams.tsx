import React from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from '../styles/mainStyles';
import Header from '../components/Header';
import TeamCard from '../components/TeamCard';

const MySchoolTeams: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.CardListContainer}
        showsVerticalScrollIndicator={false}
      >
        <TeamCard />
      </ScrollView>
    </View>
  );
};

export default MySchoolTeams;
