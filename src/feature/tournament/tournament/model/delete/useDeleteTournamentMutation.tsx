import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteTournament } from "../../../../../shared/api/tournament";

export const useDeleteTournamentMutation = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: DeleteTournament,
    mutationKey: ['delete-tournament'],
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['my-tournaments'] });
    },
  });
};