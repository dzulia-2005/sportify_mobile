import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateTeam } from "../../../../shared/api/team";

export const useUpdateTeamMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:UpdateTeam,
        mutationKey:["updateTeam"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["get-tournament"]})
        }
    })
}