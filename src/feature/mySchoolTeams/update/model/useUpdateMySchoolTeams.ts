import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateTeam } from "../../../../shared/api/mySchoolTeams";

export const useUpdateMySchoolTeams = (Id:string) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(formData:FormData)=>UpdateTeam(Id,formData),
        mutationKey:["update-mySchoolTeam"],
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["getById"]})
        }
    })
}