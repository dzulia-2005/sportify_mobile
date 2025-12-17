export type GetAllStagesResponse = {
    id: string;
    tournamentId: string;
    name: string;
    order: number;
    startDate: string;
    endDate: string;
}

export type CreateStagePayload = {
    payload : {
        id: string;
        tournamentId: string;
        name: string;
        order: number;
        startDate: string;
        endDate: string;
    }
}

export type UpdateStagePayload = {
    payload: {
        
        name: string;
        order: number;
        startDate: string;
        endDate: string;
    }
}