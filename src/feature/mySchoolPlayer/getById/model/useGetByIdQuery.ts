import { useQuery } from "@tanstack/react-query"
import { GetByIdMySchoolPlayer } from "../../../../shared/api/mySchoolPlayer"

export const useGetByIdQuery = (Id:string) => {
    return useQuery({
        queryFn:()=>GetByIdMySchoolPlayer(Id),
        queryKey:["getSchoolById",Id]
    })
}