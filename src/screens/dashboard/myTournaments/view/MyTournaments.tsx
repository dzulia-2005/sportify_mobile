import React, { useMemo, useState } from "react";
import { View, FlatList, TextInput } from "react-native";
import { styles } from "../styles/index.style";
import TournamentCard from "../components/TournamentCard";
import AddTournamentButton from "../components/AddTournamentButton";
import { useGetMyTournament } from "../../../../feature/tournament/tournament/model/getMyTournaments/useGetMyTournament";
import { useDebounce } from "../../../../shared/hooks/useDebounce";


const MyTournaments: React.FC = () => {
  const {data:MyTournaments,isLoading} = useGetMyTournament();
  const [search,setSearch]=useState<string>('');
  const debounced = useDebounce(search,500);

  const filteredTournaments = useMemo(()=>{
      if(!debounced) return MyTournaments;

      return MyTournaments?.filter((tournament)=>
        tournament.name.toLowerCase().includes(debounced.toLowerCase())
      );

  },[MyTournaments,debounced])

  return (
    <View style={styles.container}>
      <View style={styles.InputContainer}>
        <TextInput
          placeholder="Search Your tournament"
          style={styles.Input}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <AddTournamentButton/>
      <FlatList
        data={filteredTournaments}
        keyExtractor={(item) => item.id}
        renderItem={({item})=> (
          <TournamentCard 
            item={item}
            isLoading={isLoading}
          />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  );
};


export default MyTournaments;
