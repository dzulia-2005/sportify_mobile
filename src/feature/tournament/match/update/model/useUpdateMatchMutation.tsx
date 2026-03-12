import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditPayload } from "../../../../../shared/api/match/index.type";
import { UpdateMatches } from "../../../../../shared/api/match";

export const useUpdateMatchMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: EditPayload & { tournamentId: string; matchId: string }) =>
      UpdateMatches(payload),
    mutationKey: ['edit-matches'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAllMatches'] });
    },
  });
};