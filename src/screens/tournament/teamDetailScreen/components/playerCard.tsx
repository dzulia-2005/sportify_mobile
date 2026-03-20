import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from '../styles/teamDetail.style';
import { GetAllPlayerResponse } from '../../../../shared/api/player/index.type';

type PlayerProp = {
  item: GetAllPlayerResponse;
};

const PlayerCard: React.FC<PlayerProp> = ({ item }) => {
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
      </View>
    </View>
  );
};

export default PlayerCard;
