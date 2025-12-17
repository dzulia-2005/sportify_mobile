import { httpClient } from ".."
import { MySchoolStandingEndpoint } from "./index.enum"
import type { GetAllStandingResponse } from "./index.type";

export const GetStandings = (tournamentId:string) => {
    return httpClient.get<GetAllStandingResponse[]>(MySchoolStandingEndpoint.GetAllStanding.replace(":tournamentId",tournamentId)).then((res)=>res.data);
}