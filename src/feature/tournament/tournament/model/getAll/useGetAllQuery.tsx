import { useQuery } from "@tanstack/react-query";
import { GetAllTournament } from "../../../../../shared/api/tournament";

export const useGetAllQuery = (isPublic?: boolean) => {
  return useQuery({
    queryKey: ['getall-tournament', isPublic],
    queryFn: () => GetAllTournament(isPublic),
  });
};