import { useMutation } from '@tanstack/react-query';
import { DeleteTeam } from '../../../../../shared/api/myTournamentTeams';

export const useDeleteTournamentTeamsMutation = () => {
  return useMutation({
    mutationFn: DeleteTeam,
    mutationKey: ['deleteTournamentTeams'],
  });
};
