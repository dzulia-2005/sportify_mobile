import { useQuery } from "@tanstack/react-query"
import { GetTeamById } from "../../../../shared/api/myTournamentTeams"

export const useGetTournamentTeamByIdQuery = (teamId:string) => {
    return useQuery({
        queryFn:() => GetTeamById(teamId),
        queryKey:["GetTournamentTeamsById"]
    })
}