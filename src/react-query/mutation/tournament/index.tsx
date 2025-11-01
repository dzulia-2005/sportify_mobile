import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CreateTournament, DeleteTournament, UpdateTournament } from "../../../api/tournament"

export const CreateTournamentMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:CreateTournament,
        mutationKey:["create-tournament"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["my-tournaments"]})
        }
    });
}

export const UpdateTournamentMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn : UpdateTournament,
        mutationKey:["update-tournament"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["my-tournaments"]})
        }
    });
}

export const DeleteTournamentMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:DeleteTournament,
        mutationKey:["delete-tournament"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["my-tournaments"]})
        }
    })
}