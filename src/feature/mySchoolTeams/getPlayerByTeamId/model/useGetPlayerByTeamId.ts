import { useQuery } from "@tanstack/react-query"
import { GetPlayersByTeamId } from "../../../../shared/api/mySchoolTeams"

export const useGetPlayerByTeamId = (teamId:string) => {
    return useQuery({
        queryFn:()=>GetPlayersByTeamId(teamId),
        queryKey:["getPlayerByTeamId",teamId]
    })
}