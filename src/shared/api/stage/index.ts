import { httpClient } from ".."
import { Stage_Endpoints } from "./index.enum"
import type { CreateStagePayload, GetAllStagesResponse, UpdateStagePayload } from "./index.type"

export const GetAllStages = (tournamentId: string) => {
  return httpClient
    .get<GetAllStagesResponse[]>(Stage_Endpoints.GetAll.replace(':tournamentId', tournamentId))
    .then((res) => res.data);
};

export const GetByTournamentId = (tournamentId:string) => {
    return httpClient.get<GetAllStagesResponse>(Stage_Endpoints.GetByTournamentId.replace(":tournamentId",tournamentId)).then((res)=>res.data);
}

export const GetById = (Id:string) => {
    return httpClient.get<GetAllStagesResponse>(Stage_Endpoints.GetById.replace(":Id",Id)).then((res)=>res.data);
}

export const CreateStage = (payload:CreateStagePayload) => {
    return httpClient.post(Stage_Endpoints.CreateStage,payload).then((res)=>res.data);
}

export const UpdateStage = ({Id,payload}:{Id:string;payload:UpdateStagePayload}) => {
    return httpClient.put(Stage_Endpoints.UpdateStage.replace(":Id",Id),payload).then((res)=>res.data);
}

export const DeleteStage = (Id:string) => {
    return httpClient.delete(Stage_Endpoints.DeleteStage.replace(":Id",Id)).then((res)=>res.data);
}