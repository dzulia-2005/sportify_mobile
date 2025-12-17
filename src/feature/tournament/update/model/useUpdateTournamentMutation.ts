import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateTournament } from "../../../../shared/api/tournament";

export const useUpdateTournamentMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn : UpdateTournament,
        mutationKey:["update-tournament"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["my-tournaments"]})
        }
    });
}