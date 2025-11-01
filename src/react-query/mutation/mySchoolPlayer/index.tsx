import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateMySchoolPlayer, DeleteMySchoolPlayer, UpdateMySchoolPlayer } from "../../../api/mySchoolPlayer"

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

export const useUpdateMySchoolPlayerMutation = (Id:string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(payload:FormData)=>UpdateMySchoolPlayer(Id,payload),
        mutationKey:["update-MySchoolPlayer",Id],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getSchoolById"]})
        }
    })
}

export const useDeleteMySchoolPlayerMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(Id:string)=>DeleteMySchoolPlayer(Id),
        mutationKey:["delete-MySchoolPlayer"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getSchoolById"]})
        }
    })
}