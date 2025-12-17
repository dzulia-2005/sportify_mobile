import { httpClient } from ".."
import { StandingEndpoints } from "./index.enum"
import type { CreateStandingPayload, GetStanding, UpdateStandingPayload } from "./index.type"

export const GetAllStanding = (tournamentId:string) => {
    return httpClient.get<GetStanding[]>(StandingEndpoints.GetStandings.replace(":tournamentId",tournamentId)).then((res)=>res.data);
}

export const GetStandingById = (Id:string) => {
    return httpClient.get<GetStanding>(StandingEndpoints.GetStanding.replace(":Id",Id)).then((res)=>res.data);
}

export const AddStanding = (payload:CreateStandingPayload) => {
    return httpClient.post(StandingEndpoints.AddStanding,payload).then((res)=>res.data);
}

export const UpdateStanding = (Id:string,payload:UpdateStandingPayload) => {
    return httpClient.put(StandingEndpoints.UpdateStanding.replace(":Id",Id),payload).then((res)=>res.data);
}

export const DeleteStanding = (Id:string) => {
    return httpClient
        .delete(StandingEndpoints.DeleteStanding.replace(":Id",Id))
        .then((res)=>res.data);
}

export const GetStandingByTournament = (tournamentId:string) => {
    return httpClient.get<GetStanding[]>(StandingEndpoints.GetStandingByTournament.replace(":tournamentId",tournamentId)).then((res)=>res.data)
}