import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/teamDetail.style';
import { GetTeamResponse } from '../../../../shared/api/team/index.type';

type headerListComponentType = {
  teamData: GetTeamResponse;
};

const HeaderListComponent: React.FC<headerListComponentType> = ({
  teamData,
}) => {
  const handleAddPlayer = () => {
    console.log('');
  };
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.teamInfoCard}>
        {teamData.logoUrl ? (
          <Image source={{ uri: teamData.logoUrl }} style={styles.teamLogo} />
        ) : (
          <View style={styles.teamLogoFallback}>
            <Text style={styles.teamLogoFallbackText}>
              {teamData.name?.[0]?.toUpperCase() ?? 'T'}
            </Text>
          </View>
        )}

        <Text style={styles.teamName}>{teamData.name}</Text>
        <Text style={styles.coachText}>Coach: {teamData.coach}</Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>
              {teamData.players?.length ?? 0}
            </Text>
            <Text style={styles.statLabel}>Players</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddPlayer}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>+ Add Player</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Players</Text>
      </View>
    </View>
  );
};

export default HeaderListComponent;
