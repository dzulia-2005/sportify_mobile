import React from 'react';
import { View, StyleSheet } from 'react-native';
import StageHeader from '../StageHeader';
import MatchCard from '../MatchCard';
import {
  EditMatchesPayload,
  MatchResponse,
} from '../../../../../shared/api/mySchoolMatches/index.type';
import { Team } from '../../types/index.type';

interface SingleKnockoutStageProps {
  categorizedMatches: {
    group: MatchResponse[];
    quarterFinal: MatchResponse[];
    semiFinal: MatchResponse[];
    final: MatchResponse[];
  };
  editingMatchId: string | null;
  teams: Team[];
  tempScores: EditMatchesPayload;
  setTempScores: React.Dispatch<React.SetStateAction<EditMatchesPayload>>;
  handleEdit: (match: MatchResponse) => void;
  handleSave: (id: string) => void;
}

const SingleKnockoutStage: React.FC<SingleKnockoutStageProps> = ({
  categorizedMatches,
  editingMatchId,
  tempScores,
  setTempScores,
  handleEdit,
  handleSave,
  teams,
}) => {
  return (
    <View style={styles.container}>
      {/* Finals */}
      {categorizedMatches.final.length > 0 && (
        <View style={styles.stage}>
          <StageHeader
            title="Final"
            color="yellow"
            count={categorizedMatches.final.length}
          />
          <View style={styles.matchesVertical}>
            {categorizedMatches.final.map(match => (
              <MatchCard
                key={match.id}
                teams={teams}
                match={match}
                editingMatchId={editingMatchId}
                tempScores={tempScores}
                setTempScores={setTempScores}
                handleEdit={handleEdit}
                handleSave={handleSave}
                isFinal
              />
            ))}
          </View>
        </View>
      )}

      {/* Semi Finals */}
      {categorizedMatches.semiFinal.length > 0 && (
        <View style={styles.stage}>
          <StageHeader
            title="Semi Final"
            color="purple"
            count={categorizedMatches.semiFinal.length}
          />
          <View style={styles.matchesGrid}>
            {categorizedMatches.semiFinal.map(match => (
              <MatchCard
                teams={teams}
                key={match.id}
                match={match}
                editingMatchId={editingMatchId}
                tempScores={tempScores}
                setTempScores={setTempScores}
                handleEdit={handleEdit}
                handleSave={handleSave}
                isSemiFinal
              />
            ))}
          </View>
        </View>
      )}

      {/* Quarter Finals */}
      {categorizedMatches.quarterFinal.length > 0 && (
        <View style={styles.stage}>
          <StageHeader
            title="Quarter Final"
            color="orange"
            count={categorizedMatches.quarterFinal.length}
          />
          <View style={styles.matchesGrid}>
            {categorizedMatches.quarterFinal.map(match => (
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
        </View>
      )}

      {/* Group Stage */}
      {categorizedMatches.group.length > 0 && (
        <View style={styles.stage}>
          <StageHeader
            title="Group Stage"
            color="blue"
            count={categorizedMatches.group.length}
          />
          <View style={styles.matchesGrid}>
            {categorizedMatches.group.map(match => (
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
        </View>
      )}
    </View>
  );
};

export default SingleKnockoutStage;

const styles = StyleSheet.create({
  container: {
    gap: 40,
  },
  stage: {
    gap: 16,
  },
  matchesVertical: {
    gap: 16,
  },
  matchesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
});
