import React, { useMemo, useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../styles/mainStyles';
import RenderHeader from '../components/RenderHeader';
import RenderItem from '../components/RenderItem';
import SearchComponent from '../components/searchComponent';

const initialPlayers = [
  {
    id: '1',
    name: 'Nikoloz Dzuliashvili',
    position: 'mekare',
    goals: 0,
    team: 'u16 team',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg',
  },
];

const MyPlayersScreen = () => {
  const [search, setSearch] = useState('');
  const [players] = useState(initialPlayers);

  const filteredPlayers = useMemo(() => {
    return players.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [players, search]);

  return (
    <View style={styles.pageContainer}>
      <SearchComponent search={search} setSearch={setSearch} />

      <View style={styles.tableContainer}>
        {RenderHeader()}
        <FlatList
          data={filteredPlayers}
          renderItem={RenderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default MyPlayersScreen;
