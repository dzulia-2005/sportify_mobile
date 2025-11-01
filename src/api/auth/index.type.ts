export type LoginPayload = {
    payload : {
        userName: string;
        password: string;
    }
}

export type LoginResponse = {
    accessToken : string;
    refreshToken :string;
}

export type RegisterResponse = {
    accessToken:string;
    refreshToken:string;
}

export type RegisterPayload = {
    payload : {
        userName: string;
        email: string;
        password: string;
    }
}

export type MeResponse = {
    id: string;
    userName: string;
    email: string;
    role: string;
}

export type RefreshPayload = {
    payload : {
        accessToken: string;
        refreshToken: string;
    }
}