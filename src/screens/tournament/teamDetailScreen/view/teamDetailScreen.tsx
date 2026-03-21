import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useGetById } from '../../../../feature/tournament/team/model/getById/useGetById';
import { styles } from '../styles/teamDetail.style';
import PlayerCard from '../components/playerCard';
import { RouteType } from '../types/teamDetail.type';
import HeaderListComponent from '../components/headerListComponent';
import ListEmptyComponent from '../components/listEmptyComponent';

const TeamDetailScreen: React.FC = () => {
  const route = useRoute<RouteType>();
  const { teamId } = route.params;
  const { data: teamData, isLoading, isError } = useGetById(teamId);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.loadingText}>loading...</Text>
      </SafeAreaView>
    );
  }

  if (isError || !teamData) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <Text style={styles.errorText}>Failed to load team information.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={teamData.players}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PlayerCard item={item} teamId={teamId} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<HeaderListComponent teamData={teamData} />}
        ListEmptyComponent={ListEmptyComponent}
      />
    </SafeAreaView>
  );
};

export default TeamDetailScreen;
