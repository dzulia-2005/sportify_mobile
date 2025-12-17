export type CreateMatchEventPayload = {
    payload : {
        matchId: string;
        playerId: string;
        type: number;
        minute: number;
    }
}

export type GetByMatchIdResponse = {
    id: string;
    matchId: string;
    playerId: string;
    playerName: string;
    type: number;
    minute: number;
}