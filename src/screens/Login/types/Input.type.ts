import { Dispatch, SetStateAction } from "react";

export type Props = {
    email:string
    password:string;
    setPassword:Dispatch<SetStateAction<string>>;
    setEmail:Dispatch<SetStateAction<string>>;
}