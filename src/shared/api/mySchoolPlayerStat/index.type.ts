export type GetPlayerStatResponse = {
    id: string
    matchId: string
    playerId: string
    goals: number
    assists: number
    yellowCards: number
    redCards: number
}

export type CreatePayload = {
  matchId: string
  playerId: string
  goals: number
  assists: number
  yellowCards: number
  redCards: number
}

export type UpdatePayload = {
  goals: number
  assists: number
  yellowCards: number
  redCards: number
}