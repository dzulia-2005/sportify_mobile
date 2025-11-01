import { useQuery } from "@tanstack/react-query"
import { GetAllStages, GetById,GetByTournamentId } from "../../../api/stage"

export const useGetAllStageQuery = () => {
    return useQuery({
        queryFn : GetAllStages,
        queryKey:["getallstages"]
    });
}

export const useGetStageByIdQuery = (Id:string) => {
    return useQuery({
        queryFn:()=>GetById(Id),
        queryKey:["getbyid",Id]
    })
}

export const useGetStageByTournamentIdQuery = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>GetByTournamentId(tournamentId),
        queryKey:["getbytorunamentid",tournamentId],
    })
}