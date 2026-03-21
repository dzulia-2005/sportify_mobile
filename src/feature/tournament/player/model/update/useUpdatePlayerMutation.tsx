import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdatePlayerById } from '../../../../../shared/api/player';
import { GetTeamResponse } from '../../../../../shared/api/team/index.type';

type UpdatePlayerPayload = {
  Id: string;
  teamId: string;
  formdata: FormData;
};

export const UpdatePlayerMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ Id, formdata }: UpdatePlayerPayload) =>
      UpdatePlayerById({ Id, formdata }),
    mutationKey: ['update-player'],
    onSuccess: async (updatedPlayer, variables) => {
      const { Id, teamId } = variables;

      queryClient.setQueryData<GetTeamResponse>(
        ['getTeamById', teamId],
        old => {
          if (!old) return old;

          return {
            ...old,
            players: (old.players || []).map(player =>
              player.id === Id ? { ...player, ...updatedPlayer } : player,
            ),
          };
        },
      );

      queryClient.setQueryData<GetTeamResponse[]>(['getall'], old => {
        if (!old) return old;

        return old.map(team =>
          team.id === teamId
            ? {
                ...team,
                players: (team.players || []).map(player =>
                  player.id === Id ? { ...player, ...updatedPlayer } : player,
                ),
              }
            : team,
        );
      });

      await queryClient.invalidateQueries({
        queryKey: ['getTeamById', teamId],
      });

      await queryClient.invalidateQueries({
        queryKey: ['getall'],
      });

      await queryClient.invalidateQueries({
        queryKey: ['getplayerbyId', Id],
      });
    },
  });
};
