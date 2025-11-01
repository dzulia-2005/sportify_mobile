import { useMutation, useQueryClient } from "@tanstack/react-query"
import { EditMatch, GenerateMatches } from "../../../api/mySchoolMatches"
import type { EditMatchesPayload } from "../../../api/mySchoolMatches/index.type"

export const useEditMatchesMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:({id,payload}:{payload:EditMatchesPayload,id:string})=>EditMatch(id,payload),
        mutationKey:["EditMySchoolMatch"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getAllMySchoolTournamentMatches"]})
        }
    })
}

export const useGenerateMatchesMutation = (tournamentId:string) => {
    return useMutation({
        mutationFn:() => GenerateMatches(tournamentId),
        mutationKey:["GenerateMySchoolMatches"]
    })
}