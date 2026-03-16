import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from '../styles/teams.styles';
import Header from '../components/header';
import TeamCard from '../components/teamCard';
import { useGetByTournamentId } from '../../../../feature/tournament/team/model/getByTournamentId/useGetByTournamentId';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TournamentTabNavigatorType } from '../../../../app/navigation/tabs/tournament/tournamentTabsNavigator/tournamenTabNavigator.type';

type TeamsRouteProp = RouteProp<TournamentTabNavigatorType, 'teams'>;


const TeamsScreen:React.FC = () => {
  const route = useRoute<TeamsRouteProp>();
  const { tournamentId } = route.params;


  const {data:tournaments = []} = useGetByTournamentId(tournamentId);
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
            />
          )}
        />

    </View>
  )
}

export default TeamsScreen;
