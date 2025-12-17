import { useQuery } from "@tanstack/react-query";
import { GetAllPlayer } from "../../../../shared/api/player";

export const useGetAllPlayerQuery = () => {
    return useQuery({
        queryFn: GetAllPlayer,
        queryKey:["getallplayer"]
    });
}