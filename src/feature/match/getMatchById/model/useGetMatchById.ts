import { useQuery } from "@tanstack/react-query"
import { GetMatchesById } from "../../../../shared/api/match"

export const useGetMatchById = (tournamentId:string,id:string) => {
    return useQuery({
        queryFn:()=>GetMatchesById(tournamentId,id),
        queryKey:["getMatchesById"]
    })
}