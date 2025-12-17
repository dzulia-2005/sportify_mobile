import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTeam } from "../../../../shared/api/mySchoolTeams";

export const useDeleteMySchoolTeam = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(Id:string)=>deleteTeam(Id),
        mutationKey:["delete-mySchoolTeam"],
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["getById"]})
        }
    })
}