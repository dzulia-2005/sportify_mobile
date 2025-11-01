import { httpClient } from ".."
import { Stage_Endpoints } from "./index.enum"
import type { CreateStagePayload, GetAllStagesResponse, UpdateStagePayload } from "./index.type"

export const GetAllStages = () => {
    return httpClient.get<GetAllStagesResponse[]>(Stage_Endpoints.GetAll);
}

export const GetByTournamentId = (tournamentId:string) => {
    return httpClient.get<GetAllStagesResponse>(Stage_Endpoints.GetByTournamentId.replace(":tournamentId",tournamentId))
}

export const GetById = (Id:string) => {
    return httpClient.get<GetAllStagesResponse>(Stage_Endpoints.GetById.replace(":Id",Id));
}

export const CreateStage = (payload:CreateStagePayload) => {
    return httpClient.post(Stage_Endpoints.CreateStage,payload);
}

export const UpdateStage = ({Id,payload}:{Id:string;payload:UpdateStagePayload}) => {
    return httpClient.put(Stage_Endpoints.UpdateStage.replace(":Id",Id),payload);
}

export const DeleteStage = (Id:string) => {
    return httpClient.delete(Stage_Endpoints.DeleteStage.replace(":Id",Id));
}