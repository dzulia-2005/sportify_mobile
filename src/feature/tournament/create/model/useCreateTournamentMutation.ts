import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTournament } from "../../../../shared/api/tournament";

export const useCreateTournamentMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:CreateTournament,
        mutationKey:["create-tournament"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["my-tournaments"]})
        }
    });
}