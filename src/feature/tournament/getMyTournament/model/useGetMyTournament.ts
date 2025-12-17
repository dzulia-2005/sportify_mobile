import { useQuery } from "@tanstack/react-query"
import { MyTournament } from "../../../../shared/api/tournament"

export const useGetMyTournament = () => {
    return useQuery({
        queryFn:MyTournament,
        queryKey:["my-tournaments"],
    })
}