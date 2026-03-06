import { useQuery } from "@tanstack/react-query"
import { GetAllTeams } from "../../../../../shared/api/myTournamentTeams"

export const useGetAllTeamQuery = (tournamentId:string) => {
    return useQuery({
        queryFn:() => GetAllTeams(tournamentId),
        queryKey:["getAllTournamentTeams"]
    })
}