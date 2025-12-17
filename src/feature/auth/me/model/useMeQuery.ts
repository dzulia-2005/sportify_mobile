import { useQuery } from "@tanstack/react-query";
import { Me } from "../../../../shared/api/auth";

export const useMeQuery = () => {
    return useQuery({
        queryFn:Me,
        queryKey:["Me"]
    });
}