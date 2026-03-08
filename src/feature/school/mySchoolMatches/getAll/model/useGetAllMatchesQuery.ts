import { useQuery } from '@tanstack/react-query';
import { GetAllMySchoolMatches } from '../../../../../shared/api/mySchoolMatches';

export const useGetAllMatchesQuery = (tournamentId: string) => {
  return useQuery({
    queryFn: () => GetAllMySchoolMatches(tournamentId),
    queryKey: ['getAllMySchoolTournamentMatches', tournamentId],
    enabled: Boolean(tournamentId),
  });
};
