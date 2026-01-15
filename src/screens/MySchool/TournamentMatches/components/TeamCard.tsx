import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { useGetMySchoolQuery } from '../../../../feature/mySchool/getSchool/model/useGetMySchoolQuery';
import { useGetMySchoolAllTournamentQuery } from '../../../../feature/mySchoolTournament/getAllTournamentMySchool/model/useGetMySchoolAllTournamentQuery';
import { NavigationProp } from '../types/index.type';
import EmptyTournament from '../../TournamentTeams/components/EmptyTournament';

const TeamCard: React.FC = () => {
  const { data: School } = useGetMySchoolQuery();
  const schoolId = School?.id;
  const { data: TournamentCards } = useGetMySchoolAllTournamentQuery(schoolId!);
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (tournamentId: string) => {
    navigation.navigate('MySchoolTournamentMatches', {
      tournamentId: tournamentId,
    });
  };

  return (
    <FlatList
      ListEmptyComponent={EmptyTournament}
      data={TournamentCards}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          style={styles.CardContainer}
        >
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
