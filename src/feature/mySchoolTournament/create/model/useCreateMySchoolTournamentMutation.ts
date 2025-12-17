import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateMySchoolTournament } from "../../../../shared/api/mySchoolTournament";

export const useCreateMySchoolTournamentMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:CreateMySchoolTournament,
        mutationKey:["createMySchoolTournament"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getMySchoolAllTournaments"]})
        }
    })
}