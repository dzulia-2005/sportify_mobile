import { View, Text, ScrollView, StyleSheet } from 'react-native';
import InfoBox from '../components/InfoBox';
import React, { useMemo, useState } from 'react';
import { useGetMySchoolTournament } from '../../../../feature/school/mySchoolTournament/getMySchoolTournament/model/useGetMySchoolTournament';
import { useRoute } from '@react-navigation/native';
import { TournamentTeamsProp } from '../../tournamentTeamsDetailScreen/types/index.type';
import {
  EditMatchesPayload,
  MatchResponse,
} from '../../../../shared/api/mySchoolMatches/index.type';
import useCategorizedMatches from '../hooks/useCategorizedmatches';
import RoundRobinStage from '../components/stages/RoundRobinStage';
import SingleKnockoutStage from '../components/stages/SingleKnockoutStage';
import DoubleKnockoutStage from '../components/stages/DoubleKnockoutStage';
import { useGetAllTeamQuery } from '../../../../feature/school/mySchoolTournamentTeams/getAll/model/useGetAllTeamQuery';
import { useGetAllMatchesQuery } from '../../../../feature/school/mySchoolMatches/getAll/model/useGetAllMatchesQuery';
import { useEditMatchesMutation } from '../../../../feature/school/mySchoolMatches/edit/model/useEditMatchesMutation';

type MatchType = 0 | 1 | 2;

const TournamentMatchesScreen: React.FC = () => {
  const route = useRoute<TournamentTeamsProp>();
  const { tournamentId } = route.params;
  const tournamentQuery = useGetMySchoolTournament(tournamentId);
  const matchesQuery = useGetAllMatchesQuery(tournamentId);
  const { mutate: updateMatch } = useEditMatchesMutation();
  const { data: teams = [], isLoading: isTeamsLoading } =
    useGetAllTeamQuery(tournamentId);

  const { data: tournament, isLoading: isTournamentLoading } = tournamentQuery;
  const { data: matches, isLoading: isMatchesLoading } = matchesQuery;

  const [editingMatchId, setEditingMatchId] = useState<string | null>(null);
  const [tempScores, setTempScores] = useState<EditMatchesPayload>({
    scoreA: 0,
    scoreB: 0,
    teamAId: '',
    teamBId: '',
  });

  const isLoading = isTournamentLoading || isMatchesLoading || isTeamsLoading;

  const matchType: MatchType = useMemo(() => {
    const raw: unknown = tournament?.matchType;
    const asNumber = Number(raw);

    if (
      Number.isFinite(asNumber) &&
      (asNumber === 0 || asNumber === 1 || asNumber === 2)
    ) {
      return asNumber as MatchType;
    }

    if (typeof raw === 'string') {
      const asString = raw.trim().toLowerCase();
      const map: Record<string, MatchType> = {
        roundrobin: 0,
        round_robin: 0,
        robin: 0,
        singleknockout: 1,
        single_knockout: 1,
        single_elim: 1,
        singleelimination: 1,
        doubleknockout: 2,
        double_knockout: 2,
        double_elim: 2,
        doubleelimination: 2,
      };

      return map[asString] ?? 0;
    }

    return 0;
  }, [tournament?.matchType]);

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
            teams={teams}
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
            teams={teams}
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
            teams={teams}
            groupedMatches={groupedMatches}
            editingMatchId={editingMatchId}
            tempScores={tempScores}
            setTempScores={setTempScores}
            handleEdit={handleEdit}
            handleSave={handleSave}
          />
        );
      default:
        return null;
    }
  };

  if (isLoading || !tournament) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text style={styles.loadingText}>Loading tournament matches...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Text style={styles.trophyIcon}>🏆</Text>
        </View>
        <View>
          <Text style={styles.tournamentName}>{tournament?.name}</Text>
          <Text style={styles.matchCount}>
            Number Of Matches : {matches?.length ?? 0}
          </Text>
        </View>
      </View>

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
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#93c5fd',
    fontSize: 16,
    marginTop: 60,
  },
});

export default TournamentMatchesScreen;
