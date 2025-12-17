import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteMatch } from "../../../../shared/api/match";

export const useDeleteMatchMutation = (tournamentId:string,id:string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:() => DeleteMatch(tournamentId,id),
        mutationKey:["delete-matches"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getAllMatches"]})
        }
    })
}
