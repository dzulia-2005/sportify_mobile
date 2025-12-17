import { useQuery } from "@tanstack/react-query"
import { GetMySchoolTournamentById } from "../../../../shared/api/mySchoolTournament"

export const useGetMySchoolTournament = (Id:string) => {
    return useQuery({
        queryFn:()=>GetMySchoolTournamentById(Id),
        queryKey:["getMySchoolTournament"]
    })
}