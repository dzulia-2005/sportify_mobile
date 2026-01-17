import { useMutation } from '@tanstack/react-query';
import { UpdateMySchoolPlayer } from '../../../../shared/api/mySchoolPlayer';

export const useUpdateMySchoolPlayerMutation = (Id: string) => {
  return useMutation({
    mutationFn: (payload: FormData) => UpdateMySchoolPlayer(Id, payload),
    mutationKey: ['update-MySchoolPlayer', Id],
  });
};
