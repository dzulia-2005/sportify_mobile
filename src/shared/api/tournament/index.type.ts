import type { GetTeamResponse } from "../team/index.type";

export type CreateTournamentPayload = {
        name: string;
        isPublic: boolean,
        location: string;
        startDate: string;
        endDate: string;
        participants:number
        TournamentLogoFile?:File;
        MatchType:number;
}

export type UpdateTournamentPayload = {
        name: string;
        isPublic: boolean,
        location: string;
        startDate: string;
        endDate: string;
        participants:number;
        TournamentLogoFile?:File;
        MatchType:number;
}

export type GetAllTournamentResponse = {
    id:  string;
    name:  string;
    participants:number
    isPublic: boolean;
    location:  string;
    startDate:  string;
    endDate:  string;
    championTeamName: string;
    tournamentLogo:string;
    userId:string;
    teams: GetTeamResponse[];
    matchType:number;
}

export type ChampionsCountResponse = {
    tournamentId: string;
    champions: number
}
