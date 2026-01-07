import React, { useMemo, useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../styles/mainStyles';
import RenderHeader from '../components/RenderHeader';
import RenderItem from '../components/RenderItem';
import SearchComponent from '../components/searchComponent';
import { useGetMySchoolQuery } from '../../../../feature/mySchool/getSchool/model/useGetMySchoolQuery';
import { useGetAllPlayerInMySchool } from '../../../../feature/mySchoolPlayer/getAllPlayerInMySchool/model/useGetAllPlayerInMySchool';
import EmptyList from '../components/EmptyList';

const MyPlayersScreen = () => {
  const [search, setSearch] = useState('');
  const { data: school } = useGetMySchoolQuery();
  const schoolId = school?.id;
  const { data: PLAYERS = [] } = useGetAllPlayerInMySchool(schoolId!);
  const [players] = useState(PLAYERS);

  const filteredPlayers = useMemo(() => {
    return players.filter(p =>
      p.firstName.toLowerCase().includes(search.toLowerCase()),
    );
  }, [players, search]);

  return (
    <View style={styles.pageContainer}>
      <SearchComponent search={search} setSearch={setSearch} />

      <View style={styles.tableContainer}>
        <RenderHeader />
        <FlatList
          data={filteredPlayers}
          ListEmptyComponent={EmptyList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <RenderItem item={item} />}
        />
      </View>
    </View>
  );
};

export default MyPlayersScreen;
