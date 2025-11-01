import { useQuery } from "@tanstack/react-query"
import {  GetAllTournamentsInMySchoolBySchoolId, GetMySchoolTournamentById, GetTournamentBySchoolId } from "../../../api/mySchoolTournament"


export const useGetMySchoolTournament = (Id:string) => {
    return useQuery({
        queryFn:()=>GetMySchoolTournamentById(Id),
        queryKey:["getMySchoolTournament"]
    })
}

export const useGetMySchoolAllTournamentQuery = (schoolId:string) => {
    return useQuery({
        queryFn:()=>GetAllTournamentsInMySchoolBySchoolId(schoolId),
        queryKey:["getMySchoolAllTournaments"],
        enabled:!!schoolId, 
    })
}


export const useGetTournamentByIdQuery = (schoolId:string) => {
    return useQuery({
        queryFn:()=>GetTournamentBySchoolId(schoolId),
        queryKey:["getTournamentBySchoolId"]
    })
}
