import { useMutation } from "@tanstack/react-query";
import { DeleteTeam } from "../../../../../shared/api/team";

export const useDeleteTeamMutation = () => {
  return useMutation({
    mutationFn: DeleteTeam,
    mutationKey: ['deleteTeam'],
  });
};