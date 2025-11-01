export interface Team {
    id: string;
    tournamentId: string;
    name: string;
    logoUrl: string;
    matchType:number
  }

export interface CreatePayload {
    Name:string;
    LogoFile:string;
}

export interface UpdatePayload {
    Name:string;
    LogoFile:string;
}