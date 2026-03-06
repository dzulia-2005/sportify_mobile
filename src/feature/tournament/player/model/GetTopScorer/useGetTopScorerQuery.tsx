import { useQuery } from "@tanstack/react-query";
import { GetTopScorers } from "../../../../../shared/api/player";

export const useGetTopScorerQuery = (tournamentId: string) => {
  return useQuery({
    queryFn: () => GetTopScorers(tournamentId),
    queryKey: ['gettopscorer', tournamentId],
  });
};