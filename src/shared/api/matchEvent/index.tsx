import { httpClient } from ".."
import { MatchEvent_Endpoints } from "./index.enum"
import type { CreateMatchEventPayload } from "./index.type"

export const CreateMatchEvent = ({payload}:CreateMatchEventPayload) => {
    return httpClient.post(MatchEvent_Endpoints.Create_MatchEvent,payload).then((res)=>res.data);
}

export const GetByMatchEvent = (matchId:string) => {
    return httpClient.get(MatchEvent_Endpoints.GetByMatchId.replace(":matchId",matchId)).then((res)=>res.data);
}