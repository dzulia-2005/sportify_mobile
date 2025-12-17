import { useMutation } from "@tanstack/react-query";
import { Register } from "../../../../shared/api/auth";
import { RegisterPayload, RegisterResponse } from "../../../../shared/api/auth/index.type";

export const useRegisterMutation = () => {
    return useMutation<RegisterResponse,Error,RegisterPayload>({
        mutationFn:Register,
        mutationKey:["register"]
    });
}