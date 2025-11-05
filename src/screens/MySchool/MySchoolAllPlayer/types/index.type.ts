import { Dispatch, SetStateAction } from "react";

export type Props = {
    setSearch:Dispatch<SetStateAction<string>>;
    search:string;
}