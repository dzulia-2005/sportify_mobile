import { useMutation } from '@tanstack/react-query';
import { DeleteMySchool } from '../../../../../shared/api/mySchool';

export const useDeleteMySchoolMutation = () => {
  return useMutation({
    mutationFn: (Id: string) => DeleteMySchool(Id),
    mutationKey: ['delete-mySchool'],
  });
};
