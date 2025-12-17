export type Root = Root2[]

export interface Root2 {
  id: string
  name: string
  logoUrl: string
  mySchoolId: string
  players: Player[]
  tournaments: Tournament[]
}

export interface Player {
  id: string
  mySchoolId: string
  teamId: string
  firstName: string
  lastName: string
  profilePictureUrl: string
  position: string
  parentFirstName: string
  parentLastName: string
  parentPhoneNumber: string
  goals: number
  assists: number
  matchesPlayed: number
  yellowCards: number
  redCards: number
  userId: string
  tournamentId: string
}

export interface Tournament {
  id: string
  name: string
  teamId: string
  startDate: string
  endDate: string
  players: Player2[]
}

export interface Player2 {
  id: string
  mySchoolId: string
  teamId: string
  firstName: string
  lastName: string
  profilePictureUrl: string
  position: string
  parentFirstName: string
  parentLastName: string
  parentPhoneNumber: string
  goals: number
  assists: number
  matchesPlayed: number
  yellowCards: number
  redCards: number
  userId: string
  tournamentId: string
}

export type CreatePayload = {
  name: string
  logoUrl: string
  mySchoolId: string
}

export type UpdatePayload = {
    name: string
    logoUrl: string
}

export type GetPlayer = {
  id: string
  mySchoolId: string
  teamId: string
  firstName: string
  lastName: string
  profilePictureUrl: string
  position: string
  parentFirstName: string
  parentLastName: string
  parentPhoneNumber: string
  goals: number
  assists: number
  matchesPlayed: number
  yellowCards: number
  redCards: number
  userId: string
  tournamentId: string
}
