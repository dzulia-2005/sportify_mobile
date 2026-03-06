import { View, Text, ScrollView, StyleSheet } from 'react-native';
import InfoBox from '../components/InfoBox';
import React, { useState } from 'react';
import { useGetMySchoolTournament } from '../../../../feature/school/mySchoolTournament/getMySchoolTournament/model/useGetMySchoolTournament';
import { useRoute } from '@react-navigation/native';
import { TournamentTeamsProp } from '../../TournamentTeamsDetailScreen/types/index.type';
import { useGetAllMatchesQuery } from '../../../../feature/mySchoolMatches/getAll/model/useGetAllMatchesQuery';
import { useEditMatchesMutation } from '../../../../feature/mySchoolMatches/edit/model/useEditMatchesMutation';
import {
  EditMatchesPayload,
  MatchResponse,
} from '../../../../shared/api/mySchoolMatches/index.type';
import useCategorizedMatches from '../hooks/useCategorizedmatches';
import RoundRobinStage from '../components/stages/RoundRobinStage';
import SingleKnockoutStage from '../components/stages/SingleKnockoutStage';
import DoubleKnockoutStage from '../components/stages/DoubleKnockoutStage';
import { useGetAllTeamQuery } from '../../../../feature/school/mySchoolTournamentTeams/getAll/model/useGetAllTeamQuery';

const TournamentMatchesScreen: React.FC = () => {
  const route = useRoute<TournamentTeamsProp>();
  const { tournamentId } = route.params;
  const { data: tournament } = useGetMySchoolTournament(tournamentId);
  const { data: matches } = useGetAllMatchesQuery(tournamentId);
  const { mutate: updateMatch } = useEditMatchesMutation();
  const { data: Teams = [] } = useGetAllTeamQuery(tournamentId);

  const [editingMatchId, setEditingMatchId] = useState<string | null>(null);
  const [tempScores, setTempScores] = useState<EditMatchesPayload>({
    scoreA: 0,
    scoreB: 0,
    teamAId: '',
    teamBId: '',
  });

  // const isLoading = isTournamentLoading || isMatchesLoading;
  const matchType = tournament?.matchType ?? 0;

  const { categorizedMatches, groupedMatches, hasKnockoutStages } =
    useCategorizedMatches(matches, matchType);

  const handleEdit = (match: MatchResponse) => {
    setEditingMatchId(match.id);
    setTempScores({
      scoreA: match.scoreA ?? 0,
      scoreB: match.scoreB ?? 0,
      teamAId: match.teamAId || '',
      teamBId: match.teamBId || '',
    });
  };

  const handleSave = (matchId: string) => {
    updateMatch({
      id: matchId,
      payload: {
        scoreA: tempScores.scoreA,
        scoreB: tempScores.scoreB,
        teamAId: tempScores.teamAId,
        teamBId: tempScores.teamBId,
      },
    });
    setEditingMatchId(null);
  };

  const renderStage = () => {
    switch (matchType) {
      case 0:
        return (
          <RoundRobinStage
            teams={Teams}
            matches={matches || []}
            editingMatchId={editingMatchId}
            tempScores={tempScores}
            setTempScores={setTempScores}
            handleEdit={handleEdit}
            handleSave={handleSave}
          />
        );
      case 1:
        return (
          <SingleKnockoutStage
            teams={Teams}
            categorizedMatches={categorizedMatches}
            editingMatchId={editingMatchId}
            tempScores={tempScores}
            setTempScores={setTempScores}
            handleEdit={handleEdit}
            handleSave={handleSave}
          />
        );
      case 2:
        return (
          <DoubleKnockoutStage
            teams={Teams}
            groupedMatches={groupedMatches}
            editingMatchId={editingMatchId}
            tempScores={tempScores}
            setTempScores={setTempScores}
            handleEdit={handleEdit}
            handleSave={handleSave}
          />
        );
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.trophyIcon}>🏆</Text>
        </View>
        <View>
          <Text style={styles.tournamentName}>{tournament?.name}</Text>
          <Text style={styles.matchCount}>
            Number Of Matches : {matches?.length}
          </Text>
        </View>
      </View>

      {/* Info Box */}
      <InfoBox matchType={matchType} hasKnockoutStages={hasKnockoutStages} />
      {renderStage()}
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
