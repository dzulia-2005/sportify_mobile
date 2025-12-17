import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EditMatchesPayload } from "../../../../shared/api/mySchoolMatches/index.type";
import { EditMatch } from "../../../../shared/api/mySchoolMatches";

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