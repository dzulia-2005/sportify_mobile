import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeletePlayerById } from '../../../../../shared/api/player';
import { GetTeamResponse } from '../../../../../shared/api/team/index.type';

type DeletePlayerPayload = {
  playerId: string;
  teamId: string;
};

export const useDeletePlayerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ playerId }: DeletePlayerPayload) =>
      DeletePlayerById(playerId),
    mutationKey: ['delete-player'],
    onSuccess: async (_, variables) => {
      const { playerId, teamId } = variables;

      queryClient.setQueryData<GetTeamResponse[]>(['getall'], old => {
        if (!old) return old;

        return old.map(team =>
          team.id === teamId
            ? {
                ...team,
                players: (team.players || []).filter(
                  player => player.id !== playerId,
                ),
              }
            : team,
        );
      });

      queryClient.setQueryData<GetTeamResponse>(
        ['getTeamById', teamId],
        old => {
          if (!old) return old;

          return {
            ...old,
            players: (old.players || []).filter(
              player => player.id !== playerId,
            ),
          };
        },
      );

      await queryClient.invalidateQueries({
        queryKey: ['getTeamById', teamId],
      });
    },
  });
};
