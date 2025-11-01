import { useQuery } from "@tanstack/react-query"
import { GetAllStanding, GetStandingById, GetStandingByTournament } from "../../../api/standings"

export const useGetAllStanding = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>GetAllStanding(tournamentId),
        queryKey:["get-standings",tournamentId]
    })
}

export const useGetStanding = (Id:string) => {
    return useQuery({
        queryFn:()=>GetStandingById(Id),
        queryKey:["get-standing",Id]
    })
}

export const useGetStandingByTournamentId = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>GetStandingByTournament(tournamentId),
        queryKey:["get-tournamentId",tournamentId]
    })
}