import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteTournamentById } from "../../../../shared/api/mySchoolTournament";

export const useDeleteMySchoolTournamentMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:DeleteTournamentById,
        mutationKey:["deleteMySchoolTournament"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getMySchoolAllTournaments"]})
        }
    })
}