import { useQuery } from "@tanstack/react-query";
import { GetAllStanding } from "../../../../../shared/api/standings";

export const useGetAllStanding = (tournamentId: string) => {
  return useQuery({
    queryFn: () => GetAllStanding(tournamentId),
    queryKey: ['get-standings', tournamentId],
  });
};
