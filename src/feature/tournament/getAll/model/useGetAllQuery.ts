import { useQuery } from "@tanstack/react-query";
import { GetAllTournament } from "../../../../shared/api/tournament";

export const useGetAllQuery = (isPublic?: boolean) => {
    return useQuery({
        queryFn:()=>GetAllTournament(isPublic),
        queryKey:["getall-tournament",isPublic]
    });
}