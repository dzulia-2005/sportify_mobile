import { useMutation } from "@tanstack/react-query";
import { LogOut } from "../../../../shared/api/auth";

export const useLogOutMutation = () => {
    return useMutation({
        mutationFn:LogOut,
        mutationKey:["log-out"]
    });
}