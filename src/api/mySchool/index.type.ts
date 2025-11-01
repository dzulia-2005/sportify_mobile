export type MySchoolResponse = {
    id: string
    name: string
    logoUrl: string
    ownerId: string
    createdAt: string
    teams: Team[]
    players: Player3[]
}

  
  export interface Team {
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
  
  export interface Player3 {
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

  export type CreateMySchoolPayload = {
    name: string
    LogoFile?: File; 
  }

  export type UpdateMySchoolPayload = {
    name: string
    LogoFile?: File; 
  }