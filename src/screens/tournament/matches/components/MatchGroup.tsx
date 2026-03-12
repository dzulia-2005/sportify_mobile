import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MatchCard from './MatchCard';
import { EditedData, Match, Team } from '../types/match.type';



type MatchGroupProps = {
  title: string;
  matches: Match[];
  editingId: string | number | null;
  editedData: EditedData;
  setEditedData: React.Dispatch<React.SetStateAction<EditedData>>
  teams: Team[];
  startEditing: (match: Match) => void;
  saveChanges: (match: Match) => void;
  cancelEditing: () => void;
};

const MatchGroup: React.FC<MatchGroupProps> = ({
  title,
  matches,
  editingId,
  editedData,
  setEditedData,
  teams,
  startEditing,
  saveChanges,
  cancelEditing,
}) => {
  if (!matches.length) return null;

  return (
    <View style={styles.section}>
      <View style={styles.headerRow}>
        <View style={styles.leftBorder} />
        <Text style={styles.title}>
          {title} ({matches.length})
        </Text>
      </View>

      <View style={styles.list}>
        {matches.map((match) => (
          <MatchCard
            key={String(match.id)}
            match={match}
            editingId={editingId}
            editedData={editedData}
            setEditedData={setEditedData}
            teams={teams}
            startEditing={startEditing}
            saveChanges={saveChanges}
            cancelEditing={cancelEditing}
          />
        ))}
      </View>
    </View>
  );
};

export default MatchGroup;

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  leftBorder: {
    width: 4,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#60a5fa',
    marginRight: 10,
  },
  title: {
    color: '#60a5fa',
    fontSize: 20,
    fontWeight: '700',
  },
  list: {
    gap: 16,
  },
});