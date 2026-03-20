import { useMutation } from '@tanstack/react-query';
import { GenerateMatches } from '../../../../../shared/api/mySchoolMatches';

export const useGenerateMatchesMutation = (tournamentId: string) => {
  return useMutation({
    mutationFn: () => GenerateMatches(tournamentId),
    mutationKey: ['GenerateMySchoolMatches'],
  });
};
