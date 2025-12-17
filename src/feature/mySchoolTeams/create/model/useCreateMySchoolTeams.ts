import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTeam } from "../../../../shared/api/mySchoolTeams";

export const useCreateMySchoolTeams = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:CreateTeam,
        mutationKey:["create-mySchoolTeam"],
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getTeamBySchoolId"]})
        }
    })
}