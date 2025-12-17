import { useMutation } from "@tanstack/react-query";
import { Refresh } from "../../../../shared/api/auth";

export const useRefreshMutation = () => {
    return useMutation({
        mutationFn:Refresh,
        mutationKey:["refresh"]
    });
}