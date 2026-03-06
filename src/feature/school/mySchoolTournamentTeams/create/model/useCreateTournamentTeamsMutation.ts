import { useMutation } from '@tanstack/react-query';
import { CreateMyTournamentTeams } from '../../../../../shared/api/myTournamentTeams';

export const useCreateTournamentTeamsMutation = (tournamentId: string) => {
  return useMutation({
    mutationFn: (formData: FormData) =>
      CreateMyTournamentTeams(tournamentId, formData),
    mutationKey: ['createTournamentTeams'],
  });
};
