import { GetMatchResponse, MatchGroupType, Tournament } from "../types/match.type";


export const tournament: Tournament = {
  id: '1',
  name: 'School Championship',
  teamsCount: 8,
  matchType: 1,
};

export const allOnAllMatches: GetMatchResponse[] = [
  {
    id: '1',
    homeTeamId: 't1',
    homeTeamName: 'Eagles',
    awayTeamId: 't2',
    awayTeamName: 'Wolves',
    homeScore: 2,
    awayScore: 1,
    tournamentId: '1',
  },
  {
    id: '2',
    homeTeamId: 't3',
    homeTeamName: 'Sharks',
    awayTeamId: 't4',
    awayTeamName: 'Falcons',
    homeScore: 1,
    awayScore: 1,
    tournamentId: '1',
  },
];

export const knockoutStages: MatchGroupType[] = [
  {
    title: 'Quarter Final',
    matches: [
      {
        id: '3',
        homeTeamId: 't1',
        homeTeamName: 'Eagles',
        awayTeamId: 't2',
        awayTeamName: 'Wolves',
        homeScore: 2,
        awayScore: 0,
        tournamentId: '1',
      },
      {
        id: '4',
        homeTeamId: 't3',
        homeTeamName: 'Sharks',
        awayTeamId: 't4',
        awayTeamName: 'Falcons',
        homeScore: 3,
        awayScore: 1,
        tournamentId: '1',
      },
    ],
  },
  {
    title: 'Semi Final',
    matches: [
      {
        id: '5',
        homeTeamId: 't1',
        homeTeamName: 'Eagles',
        awayTeamId: 't3',
        awayTeamName: 'Sharks',
        homeScore: 1,
        awayScore: 0,
        tournamentId: '1',
      },
    ],
  },
  {
    title: 'Final',
    matches: [],
  },
];

export const doubleKnockoutPairs: MatchGroupType[] = [
  {
    title: 'Eagles vs Wolves',
    matches: [
      {
        id: '6',
        homeTeamId: 't1',
        homeTeamName: 'Eagles',
        awayTeamId: 't2',
        awayTeamName: 'Wolves',
        homeScore: 2,
        awayScore: 1,
        tournamentId: '1',
      },
      {
        id: '7',
        homeTeamId: 't2',
        homeTeamName: 'Wolves',
        awayTeamId: 't1',
        awayTeamName: 'Eagles',
        homeScore: 0,
        awayScore: 1,
        tournamentId: '1',
      },
    ],
  },
];