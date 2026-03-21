import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/teamDetail.style';
import { headerListComponentType } from '../types/teamDetail.type';
import DefaultImage from '../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png';
import AddPlayerModal from './addPlayerlModal/addPlayerModal';

const HeaderListComponent: React.FC<headerListComponentType> = ({
  teamData,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAddPlayer = () => {
    setIsOpenModal(true);
  };

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.teamInfoCard}>
        {teamData.logoUrl ? (
          <Image source={{ uri: teamData.logoUrl }} style={styles.teamLogo} />
        ) : (
          <View style={styles.teamLogoFallback}>
            <Image source={DefaultImage} style={styles.teamLogo} />
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

      {isOpenModal && (
        <AddPlayerModal
          onClose={() => setIsOpenModal(false)}
          visible={isOpenModal}
          teamId={teamData.id}
        />
      )}
    </View>
  );
};

export default HeaderListComponent;
