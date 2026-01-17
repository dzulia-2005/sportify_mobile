import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/index.styles';
import { PlayerStatProp } from '../types/index.type';
import EditPlayerStatModal from './editPlayerStatModal';

const PlayerStat: React.FC<PlayerStatProp> = ({ Player }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <View style={styles.section}>
      <View style={styles.statHeader}>
        <Text style={styles.sectionTitle}>Statistics</Text>
        <TouchableOpacity
          onPress={() => setIsModalOpen(true)}
          style={styles.editStatContainer}
        >
          <Text style={styles.editBtnText}>Edit Stat</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Goals</Text>
        <Text style={styles.value}>{Player?.goals}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Assists</Text>
        <Text style={styles.value}>{Player?.assists}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Yellow Cards</Text>
        <Text style={styles.value}>{Player?.yellowCards}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Red Cards</Text>
        <Text style={styles.value}>{Player?.redCards}</Text>
      </View>

      {isModalOpen && (
        <EditPlayerStatModal
          onClose={() => setIsModalOpen(false)}
          visible={isModalOpen}
          player={Player}
        />
      )}
    </View>
  );
};

export default PlayerStat;
