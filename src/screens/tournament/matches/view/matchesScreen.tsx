import React, { useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import MatchGroup from '../components/MatchGroup';
import MatchCard from '../components/MatchCard';
import { useGetByTournamentId } from '../../../../feature/tournament/team/model/getByTournamentId/useGetByTournamentId';
import { useGetAllMatchesQuery } from '../../../../feature/tournament/match/getAll/model/useGetAllMatchesQuery';
import { useGetByIdQuery } from '../../../../feature/tournament/tournament/model/getById/useGetByIdQuery';
import { useUpdateMatchMutation } from '../../../../feature/tournament/match/update/model/useUpdateMatchMutation';
import { EditedData, Match, Team } from '../types/match.type';
import { GetAllTournamentResponse } from '../../../../shared/api/tournament/index.type';
import { RouteProp } from '@react-navigation/native';
import { TournamentTabNavigatorType } from '../../../../app/navigation/tabs/tournament/tournamentTabsNavigator/tournamenTabNavigator.type';


type MatchScreenProp = {
  route:RouteProp<TournamentTabNavigatorType,'matches'>
}

const normalizeMatchType = (raw: unknown): 0 | 1 | 2 => {
  if (raw === null || raw === undefined) return 0;
  if (raw === 0 || raw === 1 || raw === 2) return raw;

  const numeric = Number(raw);
  if (numeric === 0 || numeric === 1 || numeric === 2) return numeric as 0 | 1 | 2;

  const value = String(raw).toLowerCase().trim();

  if (
    value.includes('roundrobin') ||
    value.includes('round_robin') ||
    value.includes('group') ||
    value.includes('league') ||
    value.includes('allonall') ||
    value.includes('all_on_all')
  ) {
    return 0;
  }

  if (
    value.includes('double') ||
    value.includes('doubleelimination') ||
    value.includes('double_elimination') ||
    value.includes('doubleknockout') ||
    value.includes('double_knockout')
  ) {
    return 2;
  }

  if (value.includes('single') || value.includes('knockout') || value.includes('elimination')) {
    return 1;
  }

  return 0;
};

const dedupeById = (arr: Match[]): Match[] => {
  const map = new Map<string, Match>();

  for (const item of arr) {
    map.set(item.id, item);
  }

  return Array.from(map.values());
};

const getStageNameByTeams = (teams: number) => {
  if (teams === 2) return 'Final';
  if (teams === 4) return 'Semi Final';
  if (teams === 8) return 'Quarter Final';
  if (teams === 16) return 'Round of 16';
  if (teams === 32) return 'Round of 32';
  if (teams === 64) return '1/32 Final';

  return `Round (${teams})`;
};

const nextPow2 = (n: number) => {
  let p = 1;
  while (p < n) {
    p *= 2;
  }
  return p;
};

const roundMatchCountsFromBracket = (bracketTeams: number) => {
  const counts: number[] = [];
  let teams = bracketTeams;

  while (teams > 1) {
    counts.push(teams / 2);
    teams = teams / 2;
  }

  return counts;
};

const TournamentMatchesPage: React.FC<MatchScreenProp> = ({ route }) => {

  const {tournamentId} = route.params;
  const { data: matchesResponse, isLoading: matchesLoading } = useGetAllMatchesQuery(tournamentId);
  const { data: teams = [] } = useGetByTournamentId(tournamentId);
  const { data: tournament, isLoading: tournamentLoading } = useGetByIdQuery(tournamentId);
  const { mutate: updateMatchScore } = useUpdateMatchMutation();

  const matches = useMemo(() => {
    const raw = Array.isArray(matchesResponse) ? (matchesResponse as Match[]) : [];
    return dedupeById(raw);
  }, [matchesResponse]);

  const matchType = useMemo(
    () => normalizeMatchType((tournament as GetAllTournamentResponse | undefined)?.matchType),
    [tournament],
  );

  const [editingId, setEditingId] = useState<string | null>(null);

  const [editedData, setEditedData] = useState<EditedData>({
    tournamentId: tournamentId,
    matchId: '',
    homeTeamName: '',
    awayTeamName: '',
    homeScore: 0,
    awayScore: 0,
  });

  const startEditing = (match: Match) => {
    setEditingId(match.id);

    setEditedData({
      tournamentId: match.tournamentId,
      matchId: match.id,
      homeTeamName: match.homeTeamName,
      awayTeamName: match.awayTeamName,
      homeScore: match.homeScore,
      awayScore: match.awayScore,
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
  };

  const saveChanges = () => {
    if (!tournamentId) return;

    updateMatchScore(
      {
        tournamentId: editedData.tournamentId,
        matchId: editedData.matchId,
        homeTeamName: editedData.homeTeamName,
        awayTeamName: editedData.awayTeamName,
        homeScore: editedData.homeScore,
        awayScore: editedData.awayScore,
      },
      {
        onSuccess: () => setEditingId(null),
      },
    );
  };

  const getTournamentTypeInfo = () => {
    switch (matchType) {
      case 0:
        return {
          title: 'Round Robin',
          icon: '👥',
          description: 'All teams play against each other.',
        };
      case 1:
        return {
          title: 'Single Knockout',
          icon: '⚔️',
          description: 'The losing team is eliminated after one match.',
        };
      case 2:
        return {
          title: 'Two-match Knockout',
          icon: '🏆',
          description: 'Teams play two matches and the aggregate score decides the winner.',
        };
      default:
        return {
          title: '',
          icon: '🏆',
          description: '',
        };
    }
  };

  const typeInfo = getTournamentTypeInfo();

  const knockoutStages = useMemo(() => {
    if (matchType !== 1) return [];

    const tournamentData = tournament as GetAllTournamentResponse | undefined;

    const teamCountRaw = tournamentData?.teams?.length || teams.length || 0;
    const teamCount = teamCountRaw > 1 ? teamCountRaw : Math.max(2, matches.length + 1);
    const bracketTeams = nextPow2(teamCount);
    const roundCounts = roundMatchCountsFromBracket(bracketTeams);

    const stageDefs = roundCounts.map((matchCount) => ({
      title: getStageNameByTeams(matchCount * 2),
      expectedMatches: matchCount,
      matches: [] as Match[],
    }));

    const sorted = [...matches].sort((a, b) => a.id.localeCompare(b.id));

    let end = sorted.length;

    for (let i = stageDefs.length - 1; i >= 0; i -= 1) {
      const need = stageDefs[i].expectedMatches;
      const start = Math.max(0, end - need);
      stageDefs[i].matches = sorted.slice(start, end);
      end = start;
    }

    if (end > 0 && stageDefs.length) {
      stageDefs[0].matches = [...sorted.slice(0, end), ...stageDefs[0].matches];
    }

    const seen = new Set<string>();

    return stageDefs.map((stage) => ({
      ...stage,
      matches: stage.matches.filter((match) => {
        if (seen.has(match.id)) return false;
        seen.add(match.id);
        return true;
      }),
    }));
  }, [matchType, matches, teams, tournament]);

  const doubleKO = useMemo(() => {
    const grouped: Record<string, Match[]> = {};

    matches.forEach((match) => {
      const key = [match.homeTeamId, match.awayTeamId].sort().join('-');
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(match);
    });

    return Object.values(grouped);
  }, [matches]);

  const teamsCount = useMemo(() => {
    const tournamentData = tournament as GetAllTournamentResponse | undefined;
    return tournamentData?.teams?.length || teams.length || 0;
  }, [teams.length, tournament]);

  if (!tournamentId || matchesLoading || tournamentLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#10b981" />
        <Text style={styles.loadingText}>Matches are loading...</Text>
      </View>
    );
  }

  if (!matches.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>
          {(tournament as GetAllTournamentResponse | undefined)?.name || 'Tournament Matches'}
        </Text>
        <Text style={styles.emptySubtitle}>Matches not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>
            🏆 {(tournament as GetAllTournamentResponse | undefined)?.name || 'Tournament Matches'}
          </Text>
        </View>

        <View style={styles.headerRight}>
          <Text style={styles.headerMeta}>
            All Matches: <Text style={styles.greenText}>{matches.length}</Text>
          </Text>
          <Text style={styles.headerMeta}>
            Teams: <Text style={styles.blueText}>{teamsCount}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.infoCard}>
        <View style={styles.infoIconBox}>
          <Text style={styles.infoIcon}>{typeInfo.icon}</Text>
        </View>

        <View style={styles.infoTextWrapper}>
          <Text style={styles.infoTitle}>{typeInfo.title}</Text>
          <Text style={styles.infoDescription}>{typeInfo.description}</Text>
        </View>
      </View>

      <View style={styles.matchesWrapper}>
        {matchType === 0 && (
          <MatchGroup
            title="All Matches"
            matches={matches}
            editingId={editingId}
            editedData={editedData}
            setEditedData={setEditedData}
            teams={teams as Team[]}
            startEditing={startEditing}
            saveChanges={saveChanges}
            cancelEditing={cancelEditing}
          />
        )}

        {matchType === 1 &&
          knockoutStages.map((stage, index) => (
            <View key={`${stage.title}-${index}`} style={styles.stageWrapper}>
              {stage.matches.length > 0 ? (
                <MatchGroup
                  title={stage.title}
                  matches={stage.matches}
                  editingId={editingId}
                  editedData={editedData}
                  setEditedData={setEditedData}
                  teams={teams as Team[]}
                  startEditing={startEditing}
                  saveChanges={saveChanges}
                  cancelEditing={cancelEditing}
                />
              ) : (
                <View style={styles.emptyStageCard}>
                  <Text style={styles.emptyStageTitle}>{stage.title}</Text>
                  <Text style={styles.emptyStageText}>
                    There are no matches at this stage yet.
                  </Text>
                </View>
              )}
            </View>
          ))}

        {matchType === 2 && (
          <View style={styles.doubleKoWrapper}>
            {doubleKO.map((pair, index) => {
              const totalHome = pair.reduce((sum, match) => sum + match.homeScore, 0);
              const totalAway = pair.reduce((sum, match) => sum + match.awayScore, 0);

              const winner =
                totalHome !== totalAway
                  ? totalHome > totalAway
                    ? pair[0].homeTeamName
                    : pair[0].awayTeamName
                  : 'Draw';

              return (
                <View key={index} style={styles.doubleKoCard}>
                  <View style={styles.doubleKoHeader}>
                    <Text style={styles.doubleKoTeams}>
                      <Text style={styles.blueBadge}>{pair[0].homeTeamName}</Text>
                      <Text style={styles.vsInline}> vs </Text>
                      <Text style={styles.redBadge}>{pair[0].awayTeamName}</Text>
                    </Text>

                    <View style={styles.aggregateBox}>
                      <Text style={styles.aggregateLabel}>Aggregate:</Text>
                      <Text style={styles.aggregateScore}>
                        {totalHome} - {totalAway}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.doubleKoMatchesList}>
                    {pair.map((match, matchIndex) => (
                      <View key={match.id} style={styles.innerMatchCard}>
                        <View style={styles.innerMatchHeader}>
                          <Text style={styles.matchNumber}>Match {matchIndex + 1}</Text>
                          <Text style={styles.matchIdText}>ID: {match.id.slice(0, 8)}...</Text>
                        </View>

                        <MatchCard
                          match={match}
                          editingId={editingId}
                          editedData={editedData}
                          setEditedData={setEditedData}
                          teams={teams as Team[]}
                          startEditing={startEditing}
                          saveChanges={saveChanges}
                          cancelEditing={cancelEditing}
                        />
                      </View>
                    ))}
                  </View>

                  <View style={styles.doubleKoFooter}>
                    <Text style={styles.footerScoreText}>
                      Aggregate Score: <Text style={styles.greenText}>{totalHome} - {totalAway}</Text>
                    </Text>

                    <Text style={styles.footerWinnerText}>
                      🏆 Winner: <Text style={styles.yellowText}>{winner}</Text>
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default TournamentMatchesPage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0a1324',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#0a1324',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  loadingText: {
    color: '#9ca3af',
    fontSize: 16,
    marginTop: 12,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#0a1324',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  emptyTitle: {
    color: '#34d399',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  emptySubtitle: {
    color: '#9ca3af',
    fontSize: 16,
    textAlign: 'center',
  },
  header: {
    marginBottom: 24,
    gap: 12,
  },
  headerLeft: {},
  headerTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
  },
  headerRight: {
    gap: 4,
  },
  headerMeta: {
    color: '#d1d5db',
    fontSize: 14,
  },
  greenText: {
    color: '#34d399',
    fontWeight: '700',
  },
  blueText: {
    color: '#60a5fa',
    fontWeight: '700',
  },
  yellowText: {
    color: '#facc15',
    fontWeight: '700',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(59,130,246,0.10)',
    borderWidth: 1,
    borderColor: 'rgba(59,130,246,0.25)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  infoIconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(59,130,246,0.18)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  infoIcon: {
    fontSize: 22,
  },
  infoTextWrapper: {
    flex: 1,
  },
  infoTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  infoDescription: {
    color: '#d1d5db',
    fontSize: 13,
    lineHeight: 18,
  },
  matchesWrapper: {
    gap: 24,
  },
  stageWrapper: {
    marginBottom: 8,
  },
  emptyStageCard: {
    backgroundColor: '#10203d',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    borderRadius: 20,
    padding: 18,
  },
  emptyStageTitle: {
    color: '#86efac',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  emptyStageText: {
    color: '#9ca3af',
    fontSize: 14,
    lineHeight: 20,
  },
  doubleKoWrapper: {
    gap: 24,
  },
  doubleKoCard: {
    backgroundColor: '#10203d',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    borderRadius: 20,
    padding: 16,
  },
  doubleKoHeader: {
    paddingBottom: 14,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
    gap: 12,
  },
  doubleKoTeams: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 26,
  },
  blueBadge: {
    color: '#60a5fa',
  },
  redBadge: {
    color: '#f87171',
  },
  vsInline: {
    color: '#9ca3af',
  },
  aggregateBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(0,0,0,0.18)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(16,185,129,0.25)',
  },
  aggregateLabel: {
    color: '#d1d5db',
    fontSize: 13,
  },
  aggregateScore: {
    color: '#34d399',
    fontSize: 18,
    fontWeight: '700',
  },
  doubleKoMatchesList: {
    gap: 16,
  },
  innerMatchCard: {
    backgroundColor: '#0c1a32',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    borderRadius: 16,
    padding: 12,
  },
  innerMatchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    gap: 8,
  },
  matchNumber: {
    color: '#34d399',
    fontSize: 13,
    fontWeight: '700',
  },
  matchIdText: {
    color: '#9ca3af',
    fontSize: 12,
  },
  doubleKoFooter: {
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    gap: 6,
  },
  footerScoreText: {
    color: '#d1d5db',
    fontSize: 14,
  },
  footerWinnerText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});