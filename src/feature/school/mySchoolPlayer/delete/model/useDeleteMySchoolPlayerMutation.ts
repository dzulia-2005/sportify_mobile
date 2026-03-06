import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteMySchoolPlayer } from "../../../../../shared/api/mySchoolPlayer";

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