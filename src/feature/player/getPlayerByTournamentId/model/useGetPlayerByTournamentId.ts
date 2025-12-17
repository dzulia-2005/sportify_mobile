import { useQuery } from "@tanstack/react-query"
import { GetPlayerByTournamentId } from "../../../../shared/api/player"

export const useGetPlayerByTournamentId = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>GetPlayerByTournamentId(tournamentId),
        queryKey:["getPlayerBy-tournamentId",tournamentId]
    })
}