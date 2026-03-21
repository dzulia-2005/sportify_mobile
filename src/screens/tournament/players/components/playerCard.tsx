import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/player.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Prop } from '../types/players.type';
import TournamentCardSkeleton from '../../../mySchool/tournamentTeams/components/TeamCardSkeleton';
import { useNavigation } from '@react-navigation/native';
import { TournamentNavigationProp } from '../../teams/types/teams.type';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store/store';

const PlayerCard: React.FC<Prop> = ({ item, isLoading }) => {
  const navigation = useNavigation<TournamentNavigationProp>();
  const teamId = useSelector((state: RootState) => state.team.teamId);
  if (isLoading) {
    return <TournamentCardSkeleton />;
  }

  const handlePress = (playerId: string) => {
    if (!teamId) return;
    navigation.navigate('PlayerDetailScreen', {
      playerId: playerId,
      teamId: teamId,
    });
  };

  return (
    <TouchableOpacity
      onPress={() => handlePress(item.id)}
      style={styles.cardTeams}
    >
      <View style={styles.rightSide}>
        <View>
          {item.profilePicture && (
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: item.profilePicture }}
            />
          )}
        </View>
        <View>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
            {item.firstName} {item.lastName}
          </Text>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            {item.position}
          </Text>
        </View>
      </View>
      <View>
        <Icon name="chevron-right" size={30} color="#9CA3AF" />
      </View>
    </TouchableOpacity>
  );
};

export default PlayerCard;
