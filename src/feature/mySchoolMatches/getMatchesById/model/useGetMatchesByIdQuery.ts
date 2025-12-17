import { useQuery } from "@tanstack/react-query"
import { GetById } from "../../../../shared/api/mySchoolMatches"

export const useGetMatchesByIdQuery = (id:string) => {
    return useQuery({
        queryFn:()=>GetById(id),
        queryKey:["getMySchoolTournamentMatch"]
    })
}