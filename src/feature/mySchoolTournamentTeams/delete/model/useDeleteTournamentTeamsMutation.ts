import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteTeam } from "../../../../shared/api/myTournamentTeams";

export const useDeleteTournamentTeamsMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:DeleteTeam,
        mutationKey:["deleteTournamentTeams"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getMySchoolAllTournaments"]})
        }
    })
}