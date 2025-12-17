import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateMyTournamentTeams } from "../../../../shared/api/myTournamentTeams";

export const useCreateTournamentTeamsMutation = (tournamentId:string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(formData:FormData)=>CreateMyTournamentTeams(tournamentId,formData),
        mutationKey:["createTournamentTeams"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getMySchoolAllTournaments"]})
        }
    })
}