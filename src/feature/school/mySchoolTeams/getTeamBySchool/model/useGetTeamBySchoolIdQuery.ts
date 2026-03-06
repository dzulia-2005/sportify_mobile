import { useQuery } from "@tanstack/react-query"
import { GetTeamsBySchoolId } from "../../../../../shared/api/mySchoolTeams"

export const useGetTeamBySchoolIdQuery = (schoolId:string) => {
    return useQuery({
        queryFn:()=>GetTeamsBySchoolId(schoolId),
        queryKey:["getTeamBySchoolId",schoolId]
    })
}