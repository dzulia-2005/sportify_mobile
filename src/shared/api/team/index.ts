import { httpClient } from ".."
import { Team_Endpoints } from "./index.enum"
import type { GetTeamResponse } from "./index.type";

export const GetAllTeams = () => {
    return httpClient.get<GetTeamResponse[]>(Team_Endpoints.GetAll).then((res)=>res.data);
}

export const GetById = (Id:string) => {
    return httpClient.get<GetTeamResponse>(Team_Endpoints.GetTeamById.replace(":Id",Id)).then((res)=>res.data);
}

export const CreateTeam = (formdata:FormData) => {
    return httpClient.post(Team_Endpoints.CreateTeam,formdata).then((res)=>res.data);
}

export const UpdateTeam = ({TeamId,formdata}:{TeamId:string;formdata:FormData}) => {
    return httpClient.put(Team_Endpoints.UpdateTeam.replace(":teamId",TeamId),formdata,{
        headers: {
            "Content-Type": "multipart/form-data",
          },
    }).then((res)=>res.data);
}

export const DeleteTeam = (TeamId:string) => {
    return httpClient.delete(Team_Endpoints.DeleteTeam.replace(":teamId",TeamId)).then((res)=>res.data);
}

export const getTeamByTournamentId = (tournamentId: string) => {
    return httpClient.get<GetTeamResponse[]>(Team_Endpoints.getTeamByTournamentId.replace(":tournamentId",tournamentId)).then((res)=>res.data);
}