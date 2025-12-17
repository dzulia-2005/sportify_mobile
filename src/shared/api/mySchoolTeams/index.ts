import { httpClient } from ".."
import { MySchoolTeamEndpoints } from "./index.enum"
import type { GetPlayer, Root, Root2 } from "./index.type";

export const GetTeamsBySchoolId = (schoolId:string) => {
    return httpClient.get<Root>(MySchoolTeamEndpoints.getSchoolId.replace(":schoolId",schoolId)).then((res)=>res.data);
}

export const GetById = (Id:string) => {
    return httpClient.get<Root2>(MySchoolTeamEndpoints.getById.replace(":Id",Id)).then((res)=>res.data);
}

export const UpdateTeam = (Id:string,formData:FormData) => {
    return httpClient.put(MySchoolTeamEndpoints.Update.replace(":id",Id),formData).then((res)=>res.data);
}

export const CreateTeam = (formData:FormData) => {
    return httpClient.post(MySchoolTeamEndpoints.Create,formData).then((res)=>res.data);
}

export const deleteTeam = (Id:string) => {
    return httpClient.delete(MySchoolTeamEndpoints.Delete.replace(":Id",Id)).then((res)=>res.data);
}

export const GetPlayersByTeamId = (teamId:string) => {
    return httpClient.get<GetPlayer>(MySchoolTeamEndpoints.GetByTeamId.replace(":teamId",teamId)).then((res)=>res.data)
}