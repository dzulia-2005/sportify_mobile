import { useQuery } from "@tanstack/react-query"
import { GetByMatchEvent } from "../../../../shared/api/matchEvent"

export const useGetByMatchEventQuery = (matchId:string) => {
    return useQuery({
        queryFn:()=>GetByMatchEvent(matchId),
        queryKey:["getByMatchId",matchId]
    })
}