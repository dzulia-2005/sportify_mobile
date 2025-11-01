import { httpClient } from ".."
import { Match_Endpoint } from "./index.enum"
import type { EditPayload, GetMatchResponse } from "./index.type"

export const GetAllMatches = (tournamentId:string) => {
    return httpClient.get<GetMatchResponse[]>(Match_Endpoint.GetAll.replace(":tournamentId",tournamentId)).then((res)=>res.data);
}

export const GetMatchesById = (tournamentId:string,id:string) => {
    return httpClient.get<GetMatchResponse>(Match_Endpoint.ById
        .replace(":tournamentId",tournamentId)
        .replace(":id",id)
    )
    .then((res)=>res.data);
}

export const UpdateMatches = (payload:EditPayload & { tournamentId:string , matchId:string }) => {
    const {tournamentId,matchId,homeScore,homeTeamName,awayScore,awayTeamName } = payload;
    return httpClient.put(Match_Endpoint.Update
        .replace(":tournamentId",tournamentId)
        .replace(":id",matchId),
        {homeTeamName, awayTeamName, homeScore, awayScore}
    )
    .then((res)=>res.data);
}

export const DeleteMatch = (tournamentId:string,id:string) => {
    return httpClient.delete(Match_Endpoint.Delete
        .replace(":tournamentId",tournamentId)
        .replace(":id",id)
    )
    .then((res)=>res.data);
}
