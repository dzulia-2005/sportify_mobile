import { useQuery } from "@tanstack/react-query"
import { GetAllTeams, GetTeamById } from "../../../api/myTournamentTeams"

export const useGetAllTeamQuery = (tournamentId:string) => {
    return useQuery({
        queryFn:() => GetAllTeams(tournamentId),
        queryKey:["getAllTournamentTeams"]
    })
}

export const useGetTournamentTeamByIdQuery = (teamId:string) => {
    return useQuery({
        queryFn:() => GetTeamById(teamId),
        queryKey:["GetTournamentTeamsById"]
    })
}