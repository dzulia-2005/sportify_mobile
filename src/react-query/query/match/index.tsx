import { useQuery } from "@tanstack/react-query";
import { GetAllMatches, GetMatchesById } from "../../../api/match";


export const useGetAllMatchesQuery = (tournamentId:string) => {
    return useQuery({
        queryFn:() => GetAllMatches(tournamentId),
        queryKey:["getAllMatches"]
    })
}

export const useGetMatchById = (tournamentId:string,id:string) => {
    return useQuery({
        queryFn:()=>GetMatchesById(tournamentId,id),
        queryKey:["getMatchesById"]
    })
}
