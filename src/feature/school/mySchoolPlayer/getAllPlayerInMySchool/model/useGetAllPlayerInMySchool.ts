import { useQuery } from "@tanstack/react-query"
import { GetAllPlayerMySchool } from "../../../../../shared/api/mySchoolPlayer"

export const useGetAllPlayerInMySchool = (schoolId:string) => {
    return useQuery({
        queryFn:()=>GetAllPlayerMySchool(schoolId),
        queryKey:["getAllMySchoolPlayers",schoolId]
    })
}