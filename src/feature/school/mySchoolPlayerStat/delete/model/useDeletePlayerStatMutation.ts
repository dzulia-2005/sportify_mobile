import { useMutation } from "@tanstack/react-query"
import { DeletePlayerStat } from "../../../../../shared/api/mySchoolPlayerStat"

export const useDeletePlayerStatMutation = (Id:string) => {
    return useMutation({
        mutationFn:()=>DeletePlayerStat(Id),
        mutationKey:["delete-playerStat"]
    })
}