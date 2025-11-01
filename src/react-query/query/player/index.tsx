import { useQuery } from "@tanstack/react-query"
import { GetAllPlayer, GetBestPlayer, GetPlayerById, GetPlayerByTournamentId, GetTopScorers } from "../../../api/player"

export const GetPlayerIdQuery = (id:string) => {
   return useQuery({
        queryFn : () => GetPlayerById(id),
        queryKey : ["getplayerbyId",id]
    })
}

export const GetAllPlayerQuery = () => {
    return useQuery({
        queryFn: GetAllPlayer,
        queryKey:["getallplayer"]
    });
}

export const GetTopScorerQuery = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>GetTopScorers(tournamentId),
        queryKey:["gettopscorer",tournamentId],
    })
}

export const GetBestPlayerQuery = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>GetBestPlayer(tournamentId),
        queryKey:["getbestplayer",tournamentId]
    })
}

export const GetPlayerByTournamentID = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>GetPlayerByTournamentId(tournamentId),
        queryKey:["getPlayerBy-tournamentId",tournamentId]
    })
}