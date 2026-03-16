import type { GetAllPlayerResponse } from "../player/index.type";

export type GetTeamResponse = {
    id: string;
    name: string;
    coach: string;
    tournamentId: string; 
    logoUrl?: string | null;
    players: GetAllPlayerResponse[];
}

export type CreateTeamPayload = {
    name: string;
    coach: string;
    tournamentId: string; 
    LogoFile: {
        uri: string;
    };
}

export type UpdateTeamPayload = {
    name: string;
    coach: string;
    tournamentId: string; 
    LogoFile: {
        uri: string;
    };
}

