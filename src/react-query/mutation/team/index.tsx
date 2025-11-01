import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateTeam, DeleteTeam, UpdateTeam } from "../../../api/team";

export const CreateTeamMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn : CreateTeam,
        mutationKey:["createTeam"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["get-tournament"]})
        }
    });
}

export const UpdateTeamMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:UpdateTeam,
        mutationKey:["updateTeam"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["get-tournament"]})
        }
    })
}

export const DeleteTeamMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:DeleteTeam,
        mutationKey:["deleteTeam"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["get-tournament"]})
        }
    })
}