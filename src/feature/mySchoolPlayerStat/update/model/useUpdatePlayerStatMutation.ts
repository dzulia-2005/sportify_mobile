import { useMutation } from "@tanstack/react-query"
import { UpdatePlayerStat } from "../../../../shared/api/mySchoolPlayerStat"
import { UpdatePayload } from "../../../../shared/api/mySchoolPlayerStat/index.type"

export const useUpdatePlayerStatMutation = (Id:string,payload:UpdatePayload) => {
    return useMutation({
        mutationFn:()=>UpdatePlayerStat(Id,payload),
        mutationKey:["update-playerStat"]
    })
}