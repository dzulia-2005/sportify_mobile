import React, { useMemo, useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native';
import PlayerCard from '../components/playerCard';
import { styles } from '../styles/player.style';
import { useGetPlayerByTournamentID } from '../../../../feature/tournament/player/model/getPlayerByTournamentId/useGetPlayerByTournamentId';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useDebounce } from '../../../../shared/hooks/useDebounce';
import { TournamentTabNavigatorType } from '../../../../app/navigation/tabs/tournament/tournamentTabsNavigator/tournamenTabNavigator.type';
import { GetAllPlayerResponse } from '../../../../shared/api/player/index.type';

type PlayerRouteProp = RouteProp<TournamentTabNavigatorType, 'player'>;

const PlayerScreen:React.FC = () => {
  const route = useRoute<PlayerRouteProp>();
  const {tournamentId} = route.params;
  const {data:players,isLoading} = useGetPlayerByTournamentID(tournamentId);
  const [search,setSearch] = useState<string>("");
  const debounced = useDebounce(search,500);

  const skeletonPlayers: GetAllPlayerResponse[] = Array.from(
    { length: 5 },
    (_, index) => ({
      id: `skeleton-${index}`,
      teamName: "",
      firstName: "",
      lastName: "",
      position: "",
      profilePicture: "",
      birthDate: null,
      yellowCards: 0,
      redCards: 0,
      goals: 0,
      assists: 0,
      tournamentId: "",
    })
  );

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
          data={isLoading ? skeletonPlayers : filterSearch}
          keyExtractor={(item)=>item.id}
          ListEmptyComponent={
            <View>
              <Text style={{color:'#6e6c6c'}}>Not Found Players</Text>
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
