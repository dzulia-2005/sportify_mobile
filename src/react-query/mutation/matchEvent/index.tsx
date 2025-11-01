import { useMutation } from "@tanstack/react-query"
import { CreateMatchEvent } from "../../../api/matchEvent";

export const CreateMatchEventMutation = () => {
    return useMutation({
        mutationFn:CreateMatchEvent,
        mutationKey:["createMatchEvent"]
    });
}