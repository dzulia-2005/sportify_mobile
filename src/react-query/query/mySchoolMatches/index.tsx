import { useQuery } from "@tanstack/react-query"
import { GetAllMySchoolMatches, GetById } from "../../../api/mySchoolMatches"


export const useGetAllMatchesQuery = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>GetAllMySchoolMatches(tournamentId),
        queryKey:["getAllMySchoolTournamentMatches"]
    })
}

export const useGetMatchesByIdQuery = (id:string) => {
    return useQuery({
        queryFn:()=>GetById(id),
        queryKey:["getMySchoolTournamentMatch"]
    })
}