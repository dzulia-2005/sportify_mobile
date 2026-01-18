import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/index.style';
import RenderTeam from '../components/renderTeam';
import NoTeamsAvailable from '../components/NoTeamsAvailable';
import { Team, TournamentTeamsProp } from '../types/index.type';
import AddTeamModal from '../components/AddTeamsModal';
import { useGetAllTeamQuery } from '../../../../feature/mySchoolTournamentTeams/getAll/model/useGetAllTeamQuery';
import { useRoute } from '@react-navigation/native';
import TeamCardSkeleton from '../components/teamCardSkeleton';

const TournamentTeamsDetailScreen: React.FC = () => {
  const route = useRoute<TournamentTeamsProp>();
  const { tournamentId } = route.params;
  const { data: teams, isLoading, refetch } = useGetAllTeamQuery(tournamentId);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  if (isLoading) {
    return (
      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(_, i) => i.toString()}
        renderItem={() => <TeamCardSkeleton />}
        contentContainerStyle={{
          backgroundColor: '#0b1b33',
          flexGrow: 1,
          paddingVertical: 16,
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.AddTeamBtnContainer}>
          <Text style={styles.header}>Tournament Teams</Text>
          <TouchableOpacity
            style={styles.AddBtn}
            onPress={() => setIsOpenModal(true)}
          >
            <Text style={styles.AddBtnText}>Add Team +</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.teamCount}>{teams?.length} Teams</Text>
      </View>
      <FlatList
        data={teams}
        keyExtractor={item => item.id}
        renderItem={({ item }: { item: Team }) => (
          <RenderTeam
            item={item}
            isLoading={isLoading}
            id={item.id}
            refetch={refetch}
          />
        )}
        ListEmptyComponent={NoTeamsAvailable}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
      {isOpenModal && (
        <AddTeamModal
          visible={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          currId={tournamentId}
        />
      )}
    </View>
  );
};

export default TournamentTeamsDetailScreen;
