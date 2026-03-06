import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateTeam } from "../../../../../shared/api/myTournamentTeams";

export const useUpdateTournamentTeamsMutation = (teamId:string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(formData:FormData)=>UpdateTeam(teamId,formData),
        mutationKey:["updateTournamentTeams"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getMySchoolAllTournaments"]})
        }
    })
}