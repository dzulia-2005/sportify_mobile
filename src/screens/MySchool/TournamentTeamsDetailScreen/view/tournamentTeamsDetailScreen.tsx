import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/index.style';
import RenderTeam from '../components/renderTeam';
import NoTeamsAvailable from '../components/NoTeamsAvailable';
import { Team } from '../types/index.type';

const teams: Team[] = [
  {
    id: '1',
    tournamentId: '100',
    name: 'Warriors',
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AcwEb2Y3J8DU9y7xSn-d9Ll4G4InTbMe9Q&s',
    matchType: 1,
  },
];

const TournamentTeamsDetailScreen: React.FC = () => {
  const renderTeam = ({ item }: { item: Team }) => <RenderTeam item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.AddTeamBtnContainer}>
          <Text style={styles.header}>Tournament Teams</Text>
          <TouchableOpacity style={styles.AddBtn}>
            <Text style={styles.AddBtnText}>Add Team +</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.teamCount}>{teams.length} Teams</Text>
      </View>
      <FlatList
        data={teams}
        keyExtractor={item => item.id}
        renderItem={renderTeam}
        ListEmptyComponent={NoTeamsAvailable}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TournamentTeamsDetailScreen;
