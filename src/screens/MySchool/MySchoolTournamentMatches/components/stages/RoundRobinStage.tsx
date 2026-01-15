import React from 'react';
import { View, StyleSheet } from 'react-native';
import MatchCard from '../MatchCard';
import {
  EditMatchesPayload,
  MatchResponse,
} from '../../../../../shared/api/mySchoolMatches/index.type';
import { Team } from '../../types/index.type';

interface RoundRobinStageProps {
  matches: MatchResponse[];
  teams: Team[];
  editingMatchId: string | null;
  tempScores: EditMatchesPayload;
  setTempScores: React.Dispatch<React.SetStateAction<EditMatchesPayload>>;
  handleEdit: (match: MatchResponse) => void;
  handleSave: (id: string) => void;
}

const RoundRobinStage: React.FC<RoundRobinStageProps> = ({
  matches,
  teams,
  editingMatchId,
  tempScores,
  setTempScores,
  handleEdit,
  handleSave,
}) => {
  return (
    <View style={styles.container}>
      {matches.map(match => (
        <MatchCard
          teams={teams}
          key={match.id}
          match={match}
          editingMatchId={editingMatchId}
          tempScores={tempScores}
          setTempScores={setTempScores}
          handleEdit={handleEdit}
          handleSave={handleSave}
        />
      ))}
    </View>
  );
};

export default RoundRobinStage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
});
