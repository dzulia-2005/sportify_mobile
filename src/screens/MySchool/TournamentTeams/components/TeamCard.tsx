import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { useGetMySchoolAllTournamentQuery } from '../../../../feature/mySchoolTournament/getAllTournamentMySchool/model/useGetMySchoolAllTournamentQuery';
import { useGetMySchoolQuery } from '../../../../feature/mySchool/getSchool/model/useGetMySchoolQuery';
import EmptyTournament from './EmptyTournament';
import { NavigationProp } from '../types/index.type';
import { useDeleteMySchoolTournamentMutation } from '../../../../feature/mySchoolTournament/delete/model/useDeleteMySchoolTournamentMutation';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import TournamentCardSkeleton from './TeamCardSkeleton';

const TeamCard: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { data: School } = useGetMySchoolQuery();
  const schoolId = School?.id;
  const { data: TournamentCards, isLoading } = useGetMySchoolAllTournamentQuery(
    schoolId!,
  );
  const { mutate: deleteTournament } = useDeleteMySchoolTournamentMutation();

  const handleDelete = (id: string) => {
    deleteTournament(id, {
      onError: err => {
        showErrorToast(err);
      },
    });
  };

  const handlePress = (tournamentId: string) => {
    navigation.navigate('MySchoolTeamsDetailScreen', {
      tournamentId: tournamentId,
    });
  };

  if (isLoading) {
    return <TournamentCardSkeleton />;
  }

  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
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

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <TouchableOpacity>
              <EvilIcons name="external-link" color="#fff" size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Ionicons name="trash-outline" color="#DC2626" size={24} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default TeamCard;
