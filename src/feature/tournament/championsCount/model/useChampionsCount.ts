import { useQuery } from "@tanstack/react-query"
import { GetChampions } from "../../../../shared/api/tournament"

export const useChampionsCount = (Id:string) => {
    return useQuery({
        queryFn:()=>GetChampions(Id),
        queryKey:["count-champions",Id]
    })
}