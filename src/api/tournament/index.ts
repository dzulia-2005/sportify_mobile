import { httpClient } from ".."
import { Tournament_Endpoint } from "./index.enum"
import type { ChampionsCountResponse, GetAllTournamentResponse } from "./index.type"

export const CreateTournament = (formData:FormData) => {
    return httpClient
    .post(Tournament_Endpoint.Create,formData,{
        headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res)=>res.data);
}

export const UpdateTournament = ({formdata,Id}:{Id:string,formdata:FormData}) => {
    return httpClient.put(Tournament_Endpoint.Update.replace(":Id",Id),formdata,{
        headers: { "Content-Type": "multipart/form-data" },
    }).then((res)=>res.data);
}

export const GetAllTournament = (isPublic?: boolean) => {
    const url = isPublic !== undefined 
      ? `${Tournament_Endpoint.GetAllTournament}?isPublic=${isPublic}`
      : Tournament_Endpoint.GetAllTournament;
  
    return httpClient
      .get<GetAllTournamentResponse[]>(url)
      .then((res) => res.data);
  };

export const GetTournamentById = (Id:string) => {
    return httpClient.get<GetAllTournamentResponse>(Tournament_Endpoint.GetTournamentById.replace(":Id",Id)).then((res)=>res.data);
}

export const GetChampions = (Id:string) => {
    return httpClient.get<ChampionsCountResponse>(Tournament_Endpoint.CountChampions.replace(":Id",Id)).then((res)=>res.data);
}

export const DeleteTournament = (Id:string) => {
    return httpClient.delete(Tournament_Endpoint.DeleteTournament.replace(":Id",Id)).then((res)=>res.data);
}

export const MyTournament = () => {
    return httpClient.get<GetAllTournamentResponse[]>(Tournament_Endpoint.MyTournament).then((res)=>res.data);
}