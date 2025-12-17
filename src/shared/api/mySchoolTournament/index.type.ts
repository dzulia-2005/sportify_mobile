/* eslint-disable @typescript-eslint/no-explicit-any */
export type MySchoolTournamentResponse = {
  id: string;
  name: string;
  teamId: string;
  startDate: string;
  endDate: string;
  players: MySchoolPlayerResponse[];
  matchType:number;
}

export type MySchoolPlayerResponse = {
  id: string;
  mySchoolId: string;
  teamId: string;
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
  position: string;
  parentFirstName: string;
  parentLastName: string;
  parentPhoneNumber: string;
  goals: number;
  assists: number;
  matchesPlayed: number;
  yellowCards: number;
  redCards: number;
  userId: string;
  tournamentId: string;
}

export type MySchoolCreatePayload = {
  name: string;
  startDate: string;
  endDate: string;
  mySchoolId: string;
  matchType:number;
}

export interface Team {
  id: string;
  tournamentId: string;
  name: string;
  logoUrl: string;
}

export interface Tournament {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  matches: any[];
  teams: Team[];
  matchType:number;
}
