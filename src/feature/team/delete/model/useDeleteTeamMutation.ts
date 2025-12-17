import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteTeam } from "../../../../shared/api/team";

export const useDeleteTeamMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:DeleteTeam,
        mutationKey:["deleteTeam"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["get-tournament"]})
        }
    })
}