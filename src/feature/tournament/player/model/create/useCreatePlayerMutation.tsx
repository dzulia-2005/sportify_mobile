import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreatePlayer } from '../../../../../shared/api/player';
import { GetTeamResponse } from '../../../../../shared/api/team/index.type';

export const CreatePlayerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CreatePlayer,
    mutationKey: ['create-player'],
    onSuccess: async newPlayer => {
      queryClient.setQueryData<GetTeamResponse[]>(['getall'], old => {
        if (!old) return old;

        return old.map(team =>
          team.id === newPlayer.teamId
            ? { ...team, players: [...(team.players || []), newPlayer] }
            : team,
        );
      });

      queryClient.setQueryData<GetTeamResponse>(
        ['getTeamById', newPlayer.teamId],
        old => {
          if (!old) return old;

          return {
            ...old,
            players: [...(old.players || []), newPlayer],
          };
        },
      );

      await queryClient.invalidateQueries({
        queryKey: ['getTeamById', newPlayer.teamId],
      });
    },
  });
};
