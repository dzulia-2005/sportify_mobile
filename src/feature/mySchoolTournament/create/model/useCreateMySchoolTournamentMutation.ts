import { useMutation } from '@tanstack/react-query';
import { CreateMySchoolTournament } from '../../../../shared/api/mySchoolTournament';

export const useCreateMySchoolTournamentMutation = () => {
  return useMutation({
    mutationFn: CreateMySchoolTournament,
    mutationKey: ['createMySchoolTournament'],
  });
};
