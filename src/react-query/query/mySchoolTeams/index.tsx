import { useQuery } from "@tanstack/react-query"
import { GetById, GetPlayersByTeamId, GetTeamsBySchoolId } from "../../../api/mySchoolTeams"
import { GetAllPlayerMySchool } from "../../../api/mySchoolPlayer"

export const useGetTeamBySchoolIdQuery = (schoolId:string) => {
    return useQuery({
        queryFn:()=>GetTeamsBySchoolId(schoolId),
        queryKey:["getTeamBySchoolId",schoolId]
    })
}

export const useGetByIdQuery = (Id:string) => {
    return useQuery({
        queryFn:()=>GetById(Id),
        queryKey:["getByIdTeams",Id]
    })
}

export const useGetPlayerByTeamId = (teamId:string) => {
    return useQuery({
        queryFn:()=>GetPlayersByTeamId(teamId),
        queryKey:["getPlayerByTeamId",teamId]
    })
}

export const useGetAllPlayerInMySchool = (schoolId:string) => {
    return useQuery({
        queryFn:()=>GetAllPlayerMySchool(schoolId),
        queryKey:["getAllplayersInMySchool",schoolId]
    })
}