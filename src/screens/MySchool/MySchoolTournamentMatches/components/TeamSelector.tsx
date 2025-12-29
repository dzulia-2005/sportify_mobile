import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

interface Team {
  id: string;
  name: string;
  logoUrl: string;
}

interface TeamSelectorProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (teamId: string, teamName: string) => void;
  teams: Team[];
  selectedTeamId?: string;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({
  visible,
  onClose,
  onSelect,
  teams,
  selectedTeamId,
}) => (
  <Modal visible={visible} transparent animationType="slide">
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>აირჩიეთ გუნდი</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>✕</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={teams}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.teamOption,
                selectedTeamId === item.id && styles.selectedTeam,
              ]}
              onPress={() => onSelect(item.id, item.name)}
            >
              <Image
                source={{ uri: item.logoUrl }}
                style={styles.teamOptionLogo}
              />
              <Text style={styles.teamOptionName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#0b1830',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '70%',
    borderWidth: 1,
    borderColor: '#3b82f6',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff1a',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  closeButton: {
    color: '#fff9',
    fontSize: 20,
  },
  teamOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff0d',
  },
  selectedTeam: {
    backgroundColor: '#3b82f633',
  },
  teamOptionLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  teamOptionName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default TeamSelector;
