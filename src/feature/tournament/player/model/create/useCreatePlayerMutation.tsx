import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatePlayer } from "../../../../../shared/api/player";
import { GetTeamResponse } from "../../../../../shared/api/team/index.type";

export const CreatePlayerMutation = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: CreatePlayer,
    mutationKey: ['create-player'],
    onSuccess: (newPlayer) => {
      queryclient.invalidateQueries({ queryKey: ['getall'] });

      queryclient.setQueryData<GetTeamResponse[]>(['getall'], (old) => {
        if (!old) return [];
        return old.map((team) =>
          team.id === newPlayer.teamId ? { ...team, players: [...team.players, newPlayer] } : team,
        );
      });
    },
  });
};