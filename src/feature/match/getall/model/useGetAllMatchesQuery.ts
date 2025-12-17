import { useQuery } from "@tanstack/react-query"
import { GetAllMatches } from "../../../../shared/api/match"

export const useGetAllMatchesQuery = (tournamentId:string) => {
    return useQuery({
        queryFn:() => GetAllMatches(tournamentId),
        queryKey:["getAllMatches"]
    })
}