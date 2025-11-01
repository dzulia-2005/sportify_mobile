export type GetMatchResponse = {
  id: string
  homeTeamId: string
  homeTeamName: string
  awayTeamId: string
  awayTeamName: string
  homeScore: number
  awayScore: number
  tournamentId: string
}

export type EditPayload = {
  tournamentId:string;
  matchId:string
  homeTeamName: string
  awayTeamName: string
  homeScore: number
  awayScore: number
}