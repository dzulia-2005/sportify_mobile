import { useMutation } from "@tanstack/react-query";
import { CreateMatchEvent } from "../../../../shared/api/matchEvent";

export const useCreateMatchEventMutation = () => {
    return useMutation({
        mutationFn:CreateMatchEvent,
        mutationKey:["createMatchEvent"]
    });
}