import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateMySchoolPlayer } from "../../../../shared/api/mySchoolPlayer";

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