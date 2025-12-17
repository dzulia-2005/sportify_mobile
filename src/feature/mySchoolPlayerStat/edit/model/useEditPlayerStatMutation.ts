import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdatePayload } from "../../../../shared/api/mySchoolPlayerStat/index.type";
import { EditPlayerStat } from "../../../../shared/api/mySchoolPlayerStat";

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