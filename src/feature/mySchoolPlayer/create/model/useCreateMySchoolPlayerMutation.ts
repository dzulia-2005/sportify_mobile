import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateMySchoolPlayer } from "../../../../shared/api/mySchoolPlayer";

export const useCreateMySchoolPlayerMutation = (teamId: string) => {
    const queryClient = useQueryClient();
    console.log(queryClient.getQueryCache().getAll().map(q => q.queryKey));
    return useMutation({
        mutationFn:CreateMySchoolPlayer,
        mutationKey:["create-MySchoolPlayer"],
        onSuccess:() => {
            queryClient.invalidateQueries({ queryKey : ["getByIdTeams",teamId] })
        }
    })
}