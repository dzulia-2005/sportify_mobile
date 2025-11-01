import axios from "axios";
import { httpClient } from "..";
import { Player_Endpoint } from "./index.enum";
import type { GetAllPlayerResponse, GetPlayerResponse } from "./index.type";

export const CreatePlayer = (formdata:FormData) => {
    return httpClient
     .post(Player_Endpoint.CreatePlayer,formdata,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then((res)=>res.data);
}

export const GetAllPlayer = () => {
    return httpClient
        .get<GetAllPlayerResponse[]>(Player_Endpoint.GetALLPlayer)
        .then((res)=>res.data);
}

export const GetPlayerById = (id:string) => {
    return httpClient
        .get<GetPlayerResponse>(Player_Endpoint.GetPlayerById.replace(":id",id))
        .then((res)=>res.data);
        
}

export const UpdatePlayerById = ({Id,formdata}:{Id:string;formdata:FormData}) => {
    return httpClient.put(Player_Endpoint.UpdatePlayer.replace(":id",Id),formdata,{
        headers: {
            "Content-Type": "multipart/form-data",
        },
        }).then((res)=>res.data);
}

export const DeletePlayerById = (Id:string) => {
    return httpClient.delete(Player_Endpoint.DeletePlayer.replace(":id",Id)).then((res)=>res.data);
}

export const GetTopScorers = async(tournamentId:string) => {
   try {
        const res = await httpClient.get<GetAllPlayerResponse[]>(Player_Endpoint.GetTopScorer.replace(":tournamentId",tournamentId));
        return res.data;
   } catch (err) {
        if(axios.isAxiosError(err)){
            if(err.response?.status === 404){
                return []
            }
        }
        throw err;
   }
}

export const GetBestPlayer = async(tournamentId:string) => {
    try {
        const res = await httpClient.get<GetAllPlayerResponse[]>(Player_Endpoint.GetTopPlayer.replace(":tournamentId",tournamentId));
        return res.data;
    } catch (err) {
        if(axios.isAxiosError(err)){
            if(err.response?.status === 404){
                return []
            }
        }
        throw err;
    }
}

export const GetPlayerByTournamentId = (tournamentId:string) => {
    return httpClient.get<GetAllPlayerResponse[]>(Player_Endpoint.getPlayerByTournamentId.replace(":tournamentId",tournamentId)).then((res)=>res.data);
}