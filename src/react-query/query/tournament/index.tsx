import { useQuery } from "@tanstack/react-query"
import { GetAllTournament, GetTournamentById,GetChampions, MyTournament } from "../../../api/tournament"
import type { GetAllTournamentResponse } from "../../../api/tournament/index.type";

export const useGetAllQuery = (isPublic?: boolean) => {
    return useQuery({
        queryFn:()=>GetAllTournament(isPublic),
        queryKey:["getall-tournament",isPublic]
    });
}

export const useGetByIdQuery = (Id:string) => {
    return useQuery<GetAllTournamentResponse>({
        queryFn:()=>GetTournamentById(Id),
        queryKey: ["getTournamentById", Id],
        enabled:!!Id
    })
}

export const useChampionsCount = (Id:string) => {
    return useQuery({
        queryFn:()=>GetChampions(Id),
        queryKey:["count-champions",Id]
    })
}

export const useGetMyTournament = () => {
    return useQuery({
        queryFn:MyTournament,
        queryKey:["my-tournaments"],
    })
}