import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MySchoolStackParamList } from '../../../../app/navigation/mySchoolStackNavigator/mySchoolStackNavigator.types';
import EmptyTournament from '../../tournamentTeams/components/EmptyTournament';
import { useGetMySchoolAllTournamentQuery } from '../../../../feature/school/mySchoolTournament/getAllTournamentMySchool/model/useGetMySchoolAllTournamentQuery';
import { useGetMySchoolQuery } from '../../../../feature/school/mySchool/getSchool/model/useGetMySchoolQuery';
import TournamentCardSkeleton from '../../tournamentTeams/components/TeamCardSkeleton';

type NavigationProp = StackNavigationProp<MySchoolStackParamList>;

const TeamCard: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { data: School } = useGetMySchoolQuery();
  const schoolId = School?.id;
  const { data: TournamentCards, isLoading } = useGetMySchoolAllTournamentQuery(
    schoolId!,
  );

  const handlePress = (tournamentId: string) => {
    navigation.navigate('MySchoolTournamentScores', {
      tournamentId,
    });
  };

  if (isLoading) {
    return <TournamentCardSkeleton />;
  }

  return (
    <FlatList
      data={TournamentCards}
      ListEmptyComponent={EmptyTournament}
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
