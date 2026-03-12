import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "../styles/index.style";
import TournamentCard from "../components/TournamentCard";
import AddTournamentButton from "../components/AddTournamentButton";

const tournaments = [
  {
    id: "1",
    name: "Tbilisi Cup 2025",
    teams: 8,
    date: "2025-04-12",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "2",
    name: "Dinamo Championship",
    teams: 10,
    date: "2025-06-20",
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "3",
    name: "Saburtalo League",
    teams: 12,
    date: "2025-07-15",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=60",
  },
];

const MyTournaments: React.FC = () => {

  return (
    <View style={styles.container}>

      <AddTournamentButton/>

      <FlatList
        data={tournaments}
        keyExtractor={(item) => item.id}
        renderItem={TournamentCard}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      
    </View>
  );
};


export default MyTournaments;
