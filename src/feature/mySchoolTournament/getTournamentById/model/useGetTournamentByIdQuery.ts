import { useQuery } from "@tanstack/react-query"
import { GetTournamentBySchoolId } from "../../../../shared/api/mySchoolTournament"

export const useGetTournamentByIdQuery = (schoolId:string) => {
    return useQuery({
        queryFn:()=>GetTournamentBySchoolId(schoolId),
        queryKey:["getTournamentBySchoolId"]
    })
}