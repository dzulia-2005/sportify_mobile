import { useMutation } from '@tanstack/react-query';
import { UpdateTeam } from '../../../../../shared/api/mySchoolTeams';

export const useUpdateMySchoolTeams = (Id: string) => {
  return useMutation({
    mutationFn: (formData: FormData) => UpdateTeam(Id, formData),
    mutationKey: ['update-mySchoolTeam'],
  });
};
