export type GetStanding = {
  id: string;
  teamName: string;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  gamePlayer: number;
  tournamentId: string;
  tournamentName: string;
}

export type CreateStandingPayload = {
    teamName: string;
    wins: number;
    draws: number;
    losses: number;
    points: number;
    tournamentId: string;
}

export type UpdateStandingPayload = {
    teamName: string;
    wins: number;
    draws: number;
    losses: number;
    points: number;
    tournamentId: string;
}