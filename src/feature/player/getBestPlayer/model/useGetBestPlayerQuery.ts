import { useQuery } from "@tanstack/react-query"
import { GetBestPlayer } from "../../../../shared/api/player"

export const useGetBestPlayerQuery = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>GetBestPlayer(tournamentId),
        queryKey:["getbestplayer",tournamentId]
    })
}