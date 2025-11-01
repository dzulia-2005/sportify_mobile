import { httpClient } from ".."
import { MySchoolPlayersEndpoint } from "./index.enum"
import type { MySchoolPlayersResponse } from "./index.type";

export const GetByIdMySchoolPlayer = (Id:string) => {
    return httpClient.get<MySchoolPlayersResponse>(MySchoolPlayersEndpoint.getById.replace(":Id",Id)).then((res)=>res.data);
}

export const CreateMySchoolPlayer = (payload:FormData) => {
    return httpClient.post(MySchoolPlayersEndpoint.Create,payload,{
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res)=>res.data)
}

export const UpdateMySchoolPlayer = (Id:string,payload:FormData) => {
    return httpClient.put(MySchoolPlayersEndpoint.Update.replace(":Id",Id),payload,{
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res)=>res.data);
}

export const DeleteMySchoolPlayer = (Id:string) => {
    return httpClient.delete(MySchoolPlayersEndpoint.Delete.replace(":Id",Id)).then((res)=>res.data)
}

export const GetAllPlayerMySchool = (schoolId:string) => {
    return httpClient.get<MySchoolPlayersResponse[]>(MySchoolPlayersEndpoint.getAllPlayers.replace(":schoolId",schoolId)).then((res)=>res.data);
}