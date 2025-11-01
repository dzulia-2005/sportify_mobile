import { useQuery } from "@tanstack/react-query"
import { GetByMatchEvent } from "../../../api/matchEvent"

export const GetByMatchEventQuery = (matchId:string) => {
    return useQuery({
        queryFn:()=>GetByMatchEvent(matchId),
        queryKey:["getByMatchId",matchId]
    })
}