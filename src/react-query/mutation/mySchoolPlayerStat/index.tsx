import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreatePlayerStat, DeletePlayerStat, EditPlayerStat, UpdatePlayerStat } from "../../../api/mySchoolPlayerStat"
import type { UpdatePayload } from "../../../api/mySchoolPlayerStat/index.type"

export const useCreatePlayerStatMutation = () => {
    return useMutation({
        mutationFn:CreatePlayerStat,
        mutationKey:["create-playerStat"]
    })
}

export const useUpdatePlayerStatMutation = (Id:string,payload:UpdatePayload) => {
    return useMutation({
        mutationFn:()=>UpdatePlayerStat(Id,payload),
        mutationKey:["update-playerStat"]
    })
}

export const useDeletePlayerStatMutation = (Id:string) => {
    return useMutation({
        mutationFn:()=>DeletePlayerStat(Id),
        mutationKey:["delete-playerStat"]
    })
}

export const useEditPlayerStatMutation = (playerId:string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(payload:UpdatePayload)=>EditPlayerStat(playerId,payload),
        mutationKey:["editSiplePlayerStat",playerId],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getSchoolById"]})
        }
    })
}