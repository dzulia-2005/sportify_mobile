import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdatePlayerById } from "../../../../shared/api/player";

export const useUpdatePlayerMutation = () => {
    const queryclient = useQueryClient();
    return useMutation({
        mutationFn:UpdatePlayerById,
        mutationKey:["update-player"],
        onSuccess:() => {
            queryclient.invalidateQueries({queryKey:["getplayerbyId"]});
        }
    });
}