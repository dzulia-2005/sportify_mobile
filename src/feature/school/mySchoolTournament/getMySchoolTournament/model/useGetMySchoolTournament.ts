import { useQuery } from '@tanstack/react-query';
import { GetMySchoolTournamentById } from '../../../../../shared/api/mySchoolTournament';

export const useGetMySchoolTournament = (id: string) => {
  return useQuery({
    queryFn: () => GetMySchoolTournamentById(id),
    queryKey: ['getMySchoolTournament', id],
    enabled: Boolean(id),
  });
};
