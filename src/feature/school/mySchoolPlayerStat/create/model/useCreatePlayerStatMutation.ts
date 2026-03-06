import { useMutation } from "@tanstack/react-query"
import { CreatePlayerStat } from "../../../../../shared/api/mySchoolPlayerStat"

export const useCreatePlayerStatMutation = () => {
    return useMutation({
        mutationFn:CreatePlayerStat,
        mutationKey:["create-playerStat"]
    })
}