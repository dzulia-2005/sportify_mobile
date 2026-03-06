import { useQuery } from "@tanstack/react-query"
import { GetAllTournamentsInMySchoolBySchoolId } from "../../../../../shared/api/mySchoolTournament"

export const useGetMySchoolAllTournamentQuery = (schoolId:string) => {
    return useQuery({
        queryFn:()=>GetAllTournamentsInMySchoolBySchoolId(schoolId),
        queryKey:["getMySchoolAllTournaments"],
        enabled:!!schoolId, 
    })
}