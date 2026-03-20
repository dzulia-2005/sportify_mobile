import { GetAllPlayerResponse } from '../../../../shared/api/player/index.type';

export type MatchType = 0 | 1 | 2;

export type Match = {
  id: string;
  homeTeamId: string;
  homeTeamName: string;
  awayTeamId: string;
  awayTeamName: string;
  homeScore: number;
  awayScore: number;
  tournamentId: string;
};

export type GetAllTournamentResponse = {
  id: string;
  name: string;
  participants: number;
  isPublic: boolean;
  location: string;
  startDate: string;
  endDate: string;
  championTeamName: string;
  tournamentLogo: string;
  userId: string;
  teams: Team[];
  matchType: number;
};

export type EditedData = {
  tournamentId: string;
  matchId: string;
  homeTeamName: string;
  awayTeamName: string;
  homeScore: number;
  awayScore: number;
};

export type Team = {
  id: string;
  name: string;
  coach: string;
  tournamentId: string;
  logoUrl?: string | null;
  players: GetAllPlayerResponse[];
};
