import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTeam } from "../../../../shared/api/team";

export const useCreateTeamMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn : CreateTeam,
        mutationKey:["createTeam"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["get-tournament"]})
        }
    });
}