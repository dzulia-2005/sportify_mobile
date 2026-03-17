import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { styles } from '../styles/scores.style';
import Header from '../components/header';
import RenderItem from '../components/renderItem';
import { useGetAllStanding } from '../../../../feature/tournament/standing/model/getAll/useGetAllStanding';
import { useRoute } from '@react-navigation/native';
import { TeamsRouteProp } from '../../teams/types/teams.type';

const ScoresScreen: React.FC = () => {
  const route = useRoute<TeamsRouteProp>();
  const {tournamentId} = route.params;
  const { data: standings } = useGetAllStanding(tournamentId!);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Standings</Text>
      <Header/>
      <FlatList
        data={standings}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View>
            <Text style={{color:'#646363',textAlign:'center',marginVertical:10}}>Not Found Scores</Text>
          </View>
        }
        renderItem={({item,index})=>(
          <RenderItem
            item={item}
            index={index}
          />
        )}
      />
    </View>
  );
};

export default ScoresScreen;
