import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/index.style';
import { RenderTeamProps } from '../types/index.type';

const RenderTeam: React.FC<RenderTeamProps> = ({ item }) => {
  const getMatchTypeLabel = (matchType: number): string => {
    const matchTypes: { [key: number]: string } = {
      1: 'Singles',
      2: 'Doubles',
      3: 'Team',
    };
    return matchTypes[matchType] || 'Unknown';
  };

  return (
    <TouchableOpacity style={styles.teamCard} activeOpacity={0.7}>
      <Image source={{ uri: item.logoUrl }} style={styles.logo} />
      <View style={styles.teamInfo}>
        <Text style={styles.teamName}>{item.name}</Text>
        <View style={styles.matchTypeBadge}>
          <Text style={styles.matchTypeText}>
            {getMatchTypeLabel(item.matchType)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RenderTeam;
