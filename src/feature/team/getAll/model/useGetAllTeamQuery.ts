import { useQuery } from "@tanstack/react-query"
import { GetAllTeams } from "../../../../shared/api/team"

export const useGetAllTeamQuery = () => {
    return useQuery({
        queryFn:GetAllTeams,
        queryKey:["getall"]
    })
}