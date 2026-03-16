import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from '../styles/teams.styles';
import Header from '../components/header';
import TeamCard from '../components/teamCard';
import { useGetByTournamentId } from '../../../../feature/tournament/team/model/getByTournamentId/useGetByTournamentId';
import {  useRoute } from '@react-navigation/native';
import { TeamsRouteProp } from '../types/teams.type';


const TeamsScreen:React.FC = () => {
  const route = useRoute<TeamsRouteProp>();
  const { tournamentId } = route.params;


  const {data:tournaments = [],isLoading} = useGetByTournamentId(tournamentId);
  return (
    <View style={styles.mainContainer}>
        <Header/>
        <FlatList
          data={tournaments}
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
