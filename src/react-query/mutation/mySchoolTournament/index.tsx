import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateMySchoolTournament, DeleteTournamentById } from "../../../api/mySchoolTournament"


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