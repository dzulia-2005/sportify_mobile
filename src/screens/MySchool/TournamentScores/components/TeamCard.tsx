import React from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MySchoolStackParamList } from '../../../../app/navigation/MySchoolStackNavigator/MySchoolStackNavigator.types';
import EmptyTournament from '../../TournamentTeams/components/EmptyTournament';
import { useGetMySchoolAllTournamentQuery } from '../../../../feature/mySchoolTournament/getAllTournamentMySchool/model/useGetMySchoolAllTournamentQuery';
import { useGetMySchoolQuery } from '../../../../feature/mySchool/getSchool/model/useGetMySchoolQuery';

type NavigationProp = StackNavigationProp<MySchoolStackParamList>;

const TeamCard: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { data: School } = useGetMySchoolQuery();
  const schoolId = School?.id;
  const { data: TournamentCards } = useGetMySchoolAllTournamentQuery(schoolId!);

  const handlePress = (tournamentId: string) => {
    navigation.navigate('MySchoolTournamentScores', {
      tournamentId,
    });
  };

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
