import { useMutation, useQueryClient} from "@tanstack/react-query"
import { DeleteMatch, UpdateMatches } from "../../../api/match"
import type { EditPayload } from "../../../api/match/index.type"

export const useUpdateMatchMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(payload: EditPayload & { tournamentId: string; matchId: string })=>UpdateMatches(payload),
        mutationKey:["edit-matches"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getAllMatches"]})
        }
    })
}

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
