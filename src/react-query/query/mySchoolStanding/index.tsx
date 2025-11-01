import { useQuery } from "@tanstack/react-query"
import { GetStandings } from "../../../api/mySchoolStanding"

export const useGetAllStandingQuery = (tournamentId:string) => {
    return useQuery({
        queryFn:()=>GetStandings(tournamentId),
        queryKey:["getMySchoolAllStandings"]
    })
}