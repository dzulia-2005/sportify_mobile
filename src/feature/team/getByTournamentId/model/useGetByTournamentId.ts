import { useQuery } from "@tanstack/react-query"
import { getTeamByTournamentId } from "../../../../shared/api/team"

export const useGetByTournamentId = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>getTeamByTournamentId(tournamentId),
        queryKey:["get-tournament",tournamentId]
    })
}