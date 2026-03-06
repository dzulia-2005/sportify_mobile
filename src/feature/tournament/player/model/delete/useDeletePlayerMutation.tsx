import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeletePlayerById } from "../../../../../shared/api/player";

export const useDeletePlayerMutation = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: DeletePlayerById,
    mutationKey: ['delete-player'],
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['getplayerbyId'] });
    },
  });
};