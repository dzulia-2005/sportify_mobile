import { httpClient } from ".."
import { MySchoolPlayerStatEndpoint } from "./index.enum"
import type { CreatePayload, GetPlayerStatResponse, UpdatePayload } from "./index.type";

export const getByMatchId = (matchId:string) => {
    return httpClient.get<GetPlayerStatResponse[]>(MySchoolPlayerStatEndpoint.getByMatchId.replace(":matchId",matchId)).then((res)=>res.data);
}

export const getByPlayerId = (playerId:string) => {
    return httpClient.get<GetPlayerStatResponse[]>(MySchoolPlayerStatEndpoint.getByPlayerId.replace(":playerId",playerId)).then((res)=>res.data);
}

export const CreatePlayerStat = (payload:CreatePayload) => {
    return httpClient.post(MySchoolPlayerStatEndpoint.Create,payload).then((res)=>res.data);
}

export const UpdatePlayerStat = (Id:string,Payload:UpdatePayload) => {
    return httpClient.put(MySchoolPlayerStatEndpoint.Update.replace(":Id",Id),Payload).then((res)=>res.data);
}

export const DeletePlayerStat = (Id:string) => {
    return httpClient.delete(MySchoolPlayerStatEndpoint.Delete.replace(":Id",Id)).then((res)=>res.data);
}

export const EditPlayerStat = (playerId:string,Payload:UpdatePayload) => {
    return httpClient.put(MySchoolPlayerStatEndpoint.EditPlayerId.replace(":playerId",playerId),Payload).then((res)=>res.data);
}