import { useQuery } from "@tanstack/react-query"
import { GetSchool } from "../../../../../shared/api/mySchool"

export const useGetMySchoolQuery = () => {
    return useQuery({
        queryFn:GetSchool,
        queryKey:["get-mySchool"]
    })
}