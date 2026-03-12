import React from 'react'
import { FlatList, TextInput, View } from 'react-native';
import PlayerCard from '../components/playerCard';
import { styles } from '../styles/player.style';

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

const PlayerScreen:React.FC = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder='search player'
          />
        </View>

        <FlatList
          data={tournaments}
          keyExtractor={(item)=>item.id}
          renderItem={()=>(
            <PlayerCard/>
          )}
        />

    </View>
  )
}

export default PlayerScreen;
