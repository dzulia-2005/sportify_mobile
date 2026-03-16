import React, { useMemo, useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native';
import PlayerCard from '../components/playerCard';
import { styles } from '../styles/player.style';
import { useGetPlayerByTournamentID } from '../../../../feature/tournament/player/model/getPlayerByTournamentId/useGetPlayerByTournamentId';
import { useRoute } from '@react-navigation/native';
import { TeamsRouteProp } from '../../teams/types/teams.type';
import { useDebounce } from '../../../../shared/hooks/useDebounce';


const PlayerScreen:React.FC = () => {
  const route = useRoute<TeamsRouteProp>();
  const {tournamentId} = route.params;
  const {data:players,isLoading} = useGetPlayerByTournamentID(tournamentId);
  const [search,setSearch] = useState<string>("");
  const debounced = useDebounce(search,500);

  const filterSearch = useMemo(()=>{
    if(!debounced) return players;
    return players?.filter((p)=>p.firstName.toLowerCase().includes(debounced.toLowerCase()))
  },[debounced,players]);

  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder='search player'
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <FlatList
          data={filterSearch}
          keyExtractor={(item)=>item.id}
          ListEmptyComponent={
            <View>
              <Text style={{color:'#fff'}}>Not Found Players</Text>
            </View>
          }
          renderItem={({item})=>(
            <PlayerCard
              item={item}
              isLoading={isLoading}
            />
          )}
        />

    </View>
  )
}

export default PlayerScreen;
