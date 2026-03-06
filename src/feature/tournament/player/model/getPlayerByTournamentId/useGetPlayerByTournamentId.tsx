import { useQuery } from "@tanstack/react-query";
import { GetPlayerByTournamentId } from "../../../../../shared/api/player";

export const useGetPlayerByTournamentID = (tournamentId: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryFn: () => GetPlayerByTournamentId(tournamentId),
    queryKey: ['getPlayerBy-tournamentId', tournamentId],
    enabled: options?.enabled ?? !!tournamentId,
  });
};