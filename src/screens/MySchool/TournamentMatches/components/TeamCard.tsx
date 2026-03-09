import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { useGetMySchoolQuery } from '../../../../feature/school/mySchool/getSchool/model/useGetMySchoolQuery';
import { useGetMySchoolAllTournamentQuery } from '../../../../feature/school/mySchoolTournament/getAllTournamentMySchool/model/useGetMySchoolAllTournamentQuery';
import { NavigationProp } from '../types/index.type';
import EmptyTournament from '../../tournamentTeams/components/EmptyTournament';
import TournamentCardSkeleton from '../../tournamentTeams/components/TeamCardSkeleton';

const TeamCard: React.FC = () => {
  const { data: School } = useGetMySchoolQuery();
  const schoolId = School?.id;
  const { data: TournamentCards, isLoading } = useGetMySchoolAllTournamentQuery(
    schoolId!,
  );
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (tournamentId: string) => {
    navigation.navigate('MySchoolTournamentMatches', {
      tournamentId: tournamentId,
    });
  };

  if (isLoading) {
    return <TournamentCardSkeleton />;
  }

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
