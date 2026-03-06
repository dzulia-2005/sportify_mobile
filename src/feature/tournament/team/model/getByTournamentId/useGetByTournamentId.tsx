import { useQuery } from "@tanstack/react-query";
import { getTeamByTournamentId } from "../../../../../shared/api/team";

export const useGetByTournamentId = (tournamentId: string) => {
  return useQuery({
    queryKey: ['get-tournament', tournamentId],
    queryFn: () => getTeamByTournamentId(tournamentId),
  });
};