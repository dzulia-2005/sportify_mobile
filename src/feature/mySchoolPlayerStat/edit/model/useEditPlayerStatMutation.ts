import { useMutation } from '@tanstack/react-query';
import { UpdatePayload } from '../../../../shared/api/mySchoolPlayerStat/index.type';
import { EditPlayerStat } from '../../../../shared/api/mySchoolPlayerStat';

export const useEditPlayerStatMutation = (playerId: string) => {
  return useMutation({
    mutationFn: (payload: UpdatePayload) => EditPlayerStat(playerId, payload),
    mutationKey: ['editSiplePlayerStat', playerId],
  });
};
