
export type MatchResponse = {
  id: string
  tournamentId: string
  teamAId: string
  teamAName: string
  teamALogoUrl:string
  teamBId: string
  teamBName: string
  teamBLogoUrl:string
  scoreA: number
  scoreB: number
  createdAt: string
}

export type EditMatchesPayload = {
    scoreA: number;
    scoreB: number;
    teamAId:string;
    teamBId:string;
}