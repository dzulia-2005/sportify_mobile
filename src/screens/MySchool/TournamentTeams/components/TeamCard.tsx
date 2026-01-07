import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { useGetMySchoolAllTournamentQuery } from '../../../../feature/mySchoolTournament/getAllTournamentMySchool/model/useGetMySchoolAllTournamentQuery';
import { useGetMySchoolQuery } from '../../../../feature/mySchool/getSchool/model/useGetMySchoolQuery';
import EmptyTournament from './EmptyTournament';
import { NavigationProp } from '../types/index.type';

const TeamCard: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const handlePress = () => {
    navigation.navigate('MySchoolTeamsDetailScreen');
  };
  const { data: School } = useGetMySchoolQuery();
  const schoolId = School?.id;
  const { data: TournamentCards } = useGetMySchoolAllTournamentQuery(schoolId!);

  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={TournamentCards}
      ListEmptyComponent={EmptyTournament}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={handlePress} style={styles.CardContainer}>
          <View style={styles.CardLeftSide}>
            <Text style={styles.TeamTitle}>{item.name}</Text>
          </View>

          <View>
            <EvilIcons name="external-link" color="#fff" size={30} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default TeamCard;
