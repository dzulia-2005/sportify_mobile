import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../styles/playerDetailScreen.style';
import StatBox from '../components/StatBox';
import { useGetPlayerIdQuery } from '../../../../feature/tournament/player/model/getByPlayerId/useGetPlayerIdQuery';
import PlayerDefaultImage from '../../../../shared/assets/images/icon-7797704_640.png';
import EditPlayerModal from '../../teamDetailScreen/components/editPlayerModal/editPlayerModal';
import { useDeletePlayerMutation } from '../../../../feature/tournament/player/model/delete/useDeletePlayerMutation';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';

type PlayerDetailRouteParams = {
  PlayerDetailScreen: {
    playerId: string;
    teamId: string;
  };
};

type PlayerDetailRouteProp = RouteProp<
  PlayerDetailRouteParams,
  'PlayerDetailScreen'
>;

const PlayerDetailScreen: React.FC = () => {
  const route = useRoute<PlayerDetailRouteProp>();
  const { playerId, teamId } = route.params;
  const navigation = useNavigation();
  const { data: player, isLoading, isError } = useGetPlayerIdQuery(playerId);
  const { mutate: deletePlayer } = useDeletePlayerMutation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleEdit = () => {
    setIsOpenModal(true);
  };

  const handleDelete = (playerId: string) => {
    deletePlayer(
      {
        playerId,
        teamId,
      },
      {
        onSuccess: () => {
          navigation.goBack();
        },
        onError: err => {
          showErrorToast(err);
        },
      },
    );
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  if (isError || !player) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: 'white' }}>Error loading player</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {player.profilePicture ? (
          <Image source={{ uri: player.profilePicture }} style={styles.image} />
        ) : (
          <Image source={PlayerDefaultImage} style={styles.image} />
        )}

        <Text style={styles.name}>
          {player.firstName} {player.lastName}
        </Text>

        <Text style={styles.position}>{player.position || 'No position'}</Text>

        <View style={styles.statsRow}>
          <StatBox label="Goals" value={player.goals} />
          <StatBox label="Assists" value={player.assists} />
          <StatBox label="Yellow" value={player.yellowCards} />
          <StatBox label="Red" value={player.redCards} />
        </View>

        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.editButtonText}>Edit Player</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.DeleteBtn}
          onPress={() => handleDelete(player.id)}
        >
          <Text style={styles.editButtonText}>Delete Player</Text>
        </TouchableOpacity>
      </View>

      <EditPlayerModal
        onClose={() => setIsOpenModal(false)}
        visible={isOpenModal}
        playerId={player.id}
        teamId={teamId}
      />
    </SafeAreaView>
  );
};

export default PlayerDetailScreen;
