import React, { useCallback, useMemo, useState } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../styles/mainStyles';
import RenderHeader from '../components/RenderHeader';
import RenderItem from '../components/RenderItem';
import SearchComponent from '../components/searchComponent';
import { useGetMySchoolQuery } from '../../../../feature/school/mySchool/getSchool/model/useGetMySchoolQuery';
import { useGetAllPlayerInMySchool } from '../../../../feature/school/mySchoolPlayer/getAllPlayerInMySchool/model/useGetAllPlayerInMySchool';
import EmptyList from '../components/EmptyList';
import { useFocusEffect } from '@react-navigation/native';

const MyPlayersScreen = () => {
  const [search, setSearch] = useState('');
  const { data: school } = useGetMySchoolQuery();
  const schoolId = school?.id;
  const {
    data: PLAYERS,
    isLoading,
    refetch,
  } = useGetAllPlayerInMySchool(schoolId!);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  const filteredPlayers = useMemo(() => {
    return PLAYERS?.filter(p =>
      p.firstName.toLowerCase().includes(search.toLowerCase()),
    );
  }, [PLAYERS, search]);

  return (
    <View style={styles.pageContainer}>
      <SearchComponent search={search} setSearch={setSearch} />

      <View style={styles.tableContainer}>
        <RenderHeader />
        <FlatList
          data={filteredPlayers}
          ListEmptyComponent={EmptyList}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <RenderItem item={item} isLoading={isLoading} />
          )}
        />
      </View>
    </View>
  );
};

export default MyPlayersScreen;
