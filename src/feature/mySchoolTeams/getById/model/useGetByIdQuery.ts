import { useQuery } from "@tanstack/react-query"
import { GetById } from "../../../../shared/api/mySchoolTeams"

export const useGetByIdQuery = (Id:string) => {
    return useQuery({
        queryFn:()=>GetById(Id),
        queryKey:["getByIdTeams",Id]
    })
}