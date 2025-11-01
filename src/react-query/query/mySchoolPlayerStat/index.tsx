import { useQuery } from "@tanstack/react-query"
import { getByMatchId, getByPlayerId } from "../../../api/mySchoolPlayerStat"

export const useGetByMatchIdQuery = (matchId:string) => {
    return useQuery({
        queryFn:()=>getByMatchId(matchId),
        queryKey:["getByMatchId"]
    })
}

export const useGetByPlayerIdQuery = (playerId:string) => {
    return useQuery({
        queryFn:()=>getByPlayerId(playerId),
        queryKey:["getByPlayerId"]
    })
}