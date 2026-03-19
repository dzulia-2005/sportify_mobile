import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from '../styles/teams.styles';
import Header from '../components/header';
import TeamCard from '../components/teamCard';
import { useGetByTournamentId } from '../../../../feature/tournament/team/model/getByTournamentId/useGetByTournamentId';
import {  useRoute } from '@react-navigation/native';
import { TeamsRouteProp } from '../types/teams.type';
import { GetTeamResponse } from '../../../../shared/api/team/index.type';


const TeamsScreen:React.FC = () => {
  const route = useRoute<TeamsRouteProp>();
  const { tournamentId } = route.params;
  const {data:tournaments = [],isLoading} = useGetByTournamentId(tournamentId);
  const skeletonData: GetTeamResponse[] = Array.from({ length: 5 }, (_, index) => ({
    id: `skeleton-${index}`,
    name: '',
    coach: '',
    tournamentId: '',
    players: [],
    logoUrl: '',
  }));

  return (
    <View style={styles.mainContainer}>
        <Header
          tournamentId={tournamentId}
        />
        <FlatList
          data={ isLoading ? skeletonData : tournaments}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
                <View>
                  <Text style={{ color: '#949292' }}>Not Found Team</Text>
                </View>
          }
          renderItem={({item})=>(
            <TeamCard
              item={item}
              isLoading={isLoading}
            />
          )}
        />
    </View>
  )
}

export default TeamsScreen;
