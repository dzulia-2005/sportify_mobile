export type GetAllStandingResponse = {
  id: string
  teamId: string
  teamName: string
  teamLogoUrl: string
  played: number
  wins: number
  draws: number
  losses: number
  goalsFor: number
  goalsAgainst: number
  points: number
}