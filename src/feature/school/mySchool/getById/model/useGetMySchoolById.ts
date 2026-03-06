import { useQuery } from "@tanstack/react-query"
import { getById } from "../../../../../shared/api/mySchool"

export const useGetMySchoolById = (Id:string) => {
    return useQuery({
        queryFn:() => getById(Id),
        queryKey:["getById"]
    })
}