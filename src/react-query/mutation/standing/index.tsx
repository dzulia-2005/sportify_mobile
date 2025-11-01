import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AddStanding, DeleteStanding, UpdateStanding } from "../../../api/standings"
import type { UpdateStandingPayload } from "../../../api/standings/index.type"

export const useCreateStandingMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:AddStanding,
        mutationKey:["create-standing"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["get-standings"]})
        }
    })
}

export const useUpdateStandingMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:({Id,payload}:{Id:string,payload:UpdateStandingPayload})=>UpdateStanding(Id,payload),
        mutationKey:["update-standing"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["get-standings"]})
        }
    })
}

export const useDeleteStandingMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:(Id:string)=>DeleteStanding(Id),
        mutationKey:["delete-standing"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["get-standings"]})
        }
    })
}