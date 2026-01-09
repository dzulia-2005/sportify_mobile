import { useMutation } from '@tanstack/react-query';
import { deleteTeam } from '../../../../shared/api/mySchoolTeams';

export const useDeleteMySchoolTeam = () => {
  return useMutation({
    mutationFn: (Id: string) => deleteTeam(Id),
    mutationKey: ['delete-mySchoolTeam'],
  });
};
