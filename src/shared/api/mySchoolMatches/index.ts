import { httpClient } from ".."
import { MySchoolMatchesEndpoints } from "./index.enum"
import type { EditMatchesPayload, MatchResponse } from "./index.type";

export const GetAllMySchoolMatches = (tournamentId:string) => {
    return httpClient.get<MatchResponse[]>(MySchoolMatchesEndpoints.getAllMatches.replace(":tournamentId",tournamentId)).then((res)=>res.data);
}

export const GetById = (id:string) => {
    return httpClient.get<MatchResponse>(MySchoolMatchesEndpoints.getById.replace(":id",id)).then((res)=>res.data);
}

export const EditMatch = (id:string,payload:EditMatchesPayload) => {
    return httpClient.put(MySchoolMatchesEndpoints.UpdateMatch.replace(":id",id),payload).then((res)=>res.data);
}

export const GenerateMatches = (tournamentId:string) => {
    return httpClient.post(MySchoolMatchesEndpoints.GenerateMatch.replace(":tournamentId",tournamentId)).then((res)=>res.data)
}





