import { useQuery } from "@tanstack/react-query"
import { GetAllTeams, GetById, getTeamByTournamentId } from "../../../api/team"

export const useGetAllTeamQuery = () => {
    return useQuery({
        queryFn:GetAllTeams,
        queryKey:["getall"]
    })
}

export const useGetById = (Id:string) => {
    return useQuery({
        queryFn:() => GetById(Id),
        queryKey:["getTeamById",Id]
    })
}

export const useGetByTournamentId = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>getTeamByTournamentId(tournamentId),
        queryKey:["get-tournament",tournamentId]
    })
}