import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StageHeader from '../StageHeader';
import MatchCard from '../MatchCard';
import {
  EditMatchesPayload,
  MatchResponse,
} from '../../../../../shared/api/mySchoolMatches/index.type';
import { Team } from '../../types/index.type';

interface DoubleKnockoutStageProps {
  groupedMatches: Record<string, MatchResponse[]>;
  editingMatchId: string | null;
  tempScores: EditMatchesPayload;
  teams: Team[];
  setTempScores: React.Dispatch<React.SetStateAction<EditMatchesPayload>>;
  handleEdit: (match: MatchResponse) => void;
  handleSave: (id: string) => void;
}

const DoubleKnockoutStage: React.FC<DoubleKnockoutStageProps> = ({
  groupedMatches,
  teams,
  editingMatchId,
  tempScores,
  setTempScores,
  handleEdit,
  handleSave,
}) => {
  return (
    <View style={styles.container}>
      {Object.entries(groupedMatches).map(([key, games]) => {
        const teamA = games[0].teamAName;
        const teamB = games[0].teamBName;

        const totalA = games.reduce((sum, g) => sum + (g.scoreA ?? 0), 0);
        const totalB = games.reduce((sum, g) => sum + (g.scoreB ?? 0), 0);

        return (
          <View key={key} style={styles.card}>
            <StageHeader
              title={`${teamA} vs ${teamB}`}
              color="purple"
              count={games.length}
            />

            <View style={styles.content}>
              <Text style={styles.generalScore}>
                General Score:{' '}
                <Text style={styles.score}>
                  {totalA} : {totalB}
                </Text>
              </Text>

              <View style={styles.matchesWrapper}>
                {games.map((game, index) => (
                  <View key={game.id} style={styles.matchItem}>
                    <Text style={styles.matchLabel}>Match {index + 1}</Text>

                    <MatchCard
                      teams={teams}
                      match={game}
                      editingMatchId={editingMatchId}
                      tempScores={tempScores}
                      setTempScores={setTempScores}
                      handleEdit={handleEdit}
                      handleSave={handleSave}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default DoubleKnockoutStage;

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  card: {
    backgroundColor: '#0b1830',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
  },
  content: {
    marginTop: 16,
  },
  generalScore: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginBottom: 16,
  },
  score: {
    fontWeight: '700',
    color: '#4ade80', // green-400
  },
  matchesWrapper: {
    gap: 16,
  },
  matchItem: {
    gap: 8,
  },
  matchLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
  },
});
