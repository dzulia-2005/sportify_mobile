import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from '../styles/teamDetail.style';
import { PlayerProp } from '../types/teamDetail.type';
import { useDeletePlayerMutation } from '../../../../feature/tournament/player/model/delete/useDeletePlayerMutation';

const PlayerCard: React.FC<PlayerProp> = ({ item, teamId }) => {
  const { mutate: deletePlayer, isPending: playerPending } =
    useDeletePlayerMutation();

  const handleDelete = (id: string) => {
    deletePlayer({
      playerId: id,
      teamId: teamId,
    });
  };

  const handleEdit = () => {};

  return (
    <View style={styles.playerCard}>
      {item.profilePicture ? (
        <Image
          source={{ uri: item.profilePicture }}
          style={styles.playerImage}
        />
      ) : (
        <View style={styles.playerImageFallback}>
          <Text style={styles.playerImageFallbackText}>
            {item.firstName?.[0] ?? ''}
            {item.lastName?.[0] ?? ''}
          </Text>
        </View>
      )}

      <View style={styles.playerContent}>
        <Text style={styles.playerName}>
          {item.firstName} {item.lastName}
        </Text>

        <Text style={styles.playerPosition}>
          {item.position || 'No position'}
        </Text>

        <View style={styles.playerStatsRow}>
          <View style={styles.smallStatBox}>
            <Text style={styles.smallStatValue}>{item.goals ?? 0}</Text>
            <Text style={styles.smallStatLabel}>Goals</Text>
          </View>

          <View style={styles.smallStatBox}>
            <Text style={styles.smallStatValue}>{item.assists ?? 0}</Text>
            <Text style={styles.smallStatLabel}>Assists</Text>
          </View>

          <View style={styles.smallStatBox}>
            <Text style={styles.smallStatValue}>{item.yellowCards ?? 0}</Text>
            <Text style={styles.smallStatLabel}>Yellow</Text>
          </View>

          <View style={styles.smallStatBox}>
            <Text style={styles.smallStatValue}>{item.redCards ?? 0}</Text>
            <Text style={styles.smallStatLabel}>Red</Text>
          </View>
        </View>

        <View style={styles.playerActions}>
          <TouchableOpacity
            style={styles.editButton}
            activeOpacity={0.8}
            onPress={handleEdit}
          >
            <Text style={styles.actionButtonText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            activeOpacity={0.8}
            onPress={() => handleDelete(item.id)}
          >
            {playerPending ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.actionButtonText}>Delete</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerCard;
