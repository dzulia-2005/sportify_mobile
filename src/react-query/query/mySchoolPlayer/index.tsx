import { useQuery } from "@tanstack/react-query"
import { GetAllPlayerMySchool, GetByIdMySchoolPlayer } from "../../../api/mySchoolPlayer"

export const useGetByIdQuery = (Id:string) => {
    return useQuery({
        queryFn:()=>GetByIdMySchoolPlayer(Id),
        queryKey:["getSchoolById",Id]
    })
}

export const useGetAllPlayerInySchool = (schoolId:string) => {
    return useQuery({
        queryFn:()=>GetAllPlayerMySchool(schoolId),
        queryKey:["getAllMySchoolPlayers",schoolId]
    })
}