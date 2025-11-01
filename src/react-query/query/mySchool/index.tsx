import { useQuery } from "@tanstack/react-query"
import { GetSchool,getById } from "../../../api/mySchool"

export const useGetMySchoolQuery = () => {
    return useQuery({
        queryFn:GetSchool,
        queryKey:["get-mySchool"]
    })
}

export const useGetMySchoolById = (Id:string) => {
    return useQuery({
        queryFn:() => getById(Id),
        queryKey:["getById"]
    })
}