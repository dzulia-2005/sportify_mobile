import { useMutation } from "@tanstack/react-query"
import { Login, LogOut, Refresh, Register } from "../../../api/auth";
import type { LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from "../../../api/auth/index.type";

export const LoginMutation = () => {
    return useMutation<LoginResponse,Error,LoginPayload>({
        mutationFn:Login,
        mutationKey:["login"]
    });
}

export const RegisterMutation = () => {
    return useMutation<RegisterResponse,Error,RegisterPayload>({
        mutationFn:Register,
        mutationKey:["register"]
    });
}

export const RefreshMutation = () => {
    return useMutation({
        mutationFn:Refresh,
        mutationKey:["refresh"]
    });
}

export const LogOutMutation = () => {
    return useMutation({
        mutationFn:LogOut,
        mutationKey:["log-out"]
    });
}