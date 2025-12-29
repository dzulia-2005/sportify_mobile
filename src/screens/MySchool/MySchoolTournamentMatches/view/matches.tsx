import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import StageHeader from '../components/StageHeader';
import InfoBox from '../components/InfoBox';
import MatchCard from '../components/MatchCard';

const mockTournament = {
  id: '1',
  name: 'Champions League 2024',
  matchType: 1,
};

const mockTeams = [
  { id: '1', name: 'Warriors', logoUrl: 'https://via.placeholder.com/50' },
  { id: '2', name: 'Eagles', logoUrl: 'https://via.placeholder.com/50' },
  { id: '3', name: 'Thunder', logoUrl: 'https://via.placeholder.com/50' },
  { id: '4', name: 'Phoenix', logoUrl: 'https://via.placeholder.com/50' },
];

const mockMatches = [
  {
    id: '1',
    teamAId: '1',
    teamBId: '2',
    teamAName: 'Warriors',
    teamBName: 'Eagles',
    teamALogoUrl: 'https://via.placeholder.com/50',
    teamBLogoUrl: 'https://via.placeholder.com/50',
    scoreA: 3,
    scoreB: 1,
    stage: 'final',
  },
  {
    id: '2',
    teamAId: '3',
    teamBId: '4',
    teamAName: 'Thunder',
    teamBName: 'Phoenix',
    teamALogoUrl: 'https://via.placeholder.com/50',
    teamBLogoUrl: 'https://via.placeholder.com/50',
    scoreA: 2,
    scoreB: 2,
    stage: 'semiFinal',
  },
  {
    id: '3',
    teamAId: '1',
    teamBId: '3',
    teamAName: 'Warriors',
    teamBName: 'Thunder',
    teamALogoUrl: 'https://via.placeholder.com/50',
    teamBLogoUrl: 'https://via.placeholder.com/50',
    scoreA: 1,
    scoreB: 0,
    stage: 'semiFinal',
  },
];

interface TempScores {
  scoreA: number;
  scoreB: number;
  teamAId: string;
  teamBId: string;
}

interface Match {
  id: string;
  teamAId: string;
  teamBId: string;
  teamAName: string;
  teamBName: string;
  teamALogoUrl: string;
  teamBLogoUrl: string;
  scoreA?: number;
  scoreB?: number;
  stage: string;
}

const TournamentMatchesScreen = () => {
  const [editingMatchId, setEditingMatchId] = useState<string | null>(null);
  const [tempScores, setTempScores] = useState<TempScores>({
    scoreA: 0,
    scoreB: 0,
    teamAId: '',
    teamBId: '',
  });

  const handleEdit = (match: Match) => {
    setEditingMatchId(match.id);
    setTempScores({
      scoreA: match.scoreA ?? 0,
      scoreB: match.scoreB ?? 0,
      teamAId: match.teamAId || '',
      teamBId: match.teamBId || '',
    });
  };

  const handleSave = () => {
    console.log('Saving:', tempScores);
    setEditingMatchId(null);
  };

  const handleScoreChange = (field: string, value: number) => {
    setTempScores(prev => ({ ...prev, [field]: value }));
  };

  const handleTeamSelect = (
    teamId: string,
    teamName: string,
    isTeamA: boolean,
  ) => {
    setTempScores(prev => ({
      ...prev,
      [isTeamA ? 'teamAId' : 'teamBId']: teamId,
    }));
  };

  const categorizedMatches = {
    final: mockMatches.filter(m => m.stage === 'final'),
    semiFinal: mockMatches.filter(m => m.stage === 'semiFinal'),
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.trophyIcon}>🏆</Text>
        </View>
        <View>
          <Text style={styles.tournamentName}>{mockTournament.name}</Text>
          <Text style={styles.matchCount}>
            მატჩების რაოდენობა: {mockMatches.length}
          </Text>
        </View>
      </View>

      {/* Info Box */}
      <InfoBox matchType={mockTournament.matchType} hasKnockoutStages={true} />

      {/* Finals */}
      {categorizedMatches.final.length > 0 && (
        <View style={styles.stageSection}>
          <StageHeader
            title="ფინალი"
            color="yellow"
            count={categorizedMatches.final.length}
          />
          {categorizedMatches.final.map(match => (
            <MatchCard
              key={match.id}
              match={match}
              isEditing={editingMatchId === match.id}
              tempScores={tempScores}
              onEdit={() => handleEdit(match)}
              onSave={handleSave}
              onScoreChange={handleScoreChange}
              onTeamSelect={handleTeamSelect}
              teams={mockTeams}
              isFinal
            />
          ))}
        </View>
      )}

      {/* Semi Finals */}
      {categorizedMatches.semiFinal.length > 0 && (
        <View style={styles.stageSection}>
          <StageHeader
            title="ნახევარფინალი"
            color="purple"
            count={categorizedMatches.semiFinal.length}
          />
          {categorizedMatches.semiFinal.map(match => (
            <MatchCard
              key={match.id}
              match={match}
              isEditing={editingMatchId === match.id}
              tempScores={tempScores}
              onEdit={() => handleEdit(match)}
              onSave={handleSave}
              onScoreChange={handleScoreChange}
              onTeamSelect={handleTeamSelect}
              teams={mockTeams}
              isSemiFinal
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#061325',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 24,
    marginTop: 40,
  },
  iconContainer: {
    backgroundColor: '#3b82f6',
    padding: 12,
    borderRadius: 12,
  },
  trophyIcon: {
    fontSize: 24,
  },
  tournamentName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  matchCount: {
    fontSize: 14,
    color: '#93c5fd',
  },
  stageSection: {
    marginBottom: 32,
  },
});

export default TournamentMatchesScreen;
