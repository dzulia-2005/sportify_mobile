import { httpClient } from ".."
import { MySchoolTournamentTeamsEndpoint } from "./index.enum"
import type { Team } from "./index.type";

export const CreateMyTournamentTeams = (tournamentId:string,formData:FormData) => {
    return httpClient.post(MySchoolTournamentTeamsEndpoint.Create.replace(":tournamentId",tournamentId),formData).then((res)=>res.data);
}

export const GetAllTeams = (tournamentId:string) => {
    return httpClient.get<Team[]>(MySchoolTournamentTeamsEndpoint.GetAllTeams.replace(":tournamentId",tournamentId)).then((res)=>res.data);
}

export const GetTeamById = (teamId:string) => {
    return httpClient.get<Team>(MySchoolTournamentTeamsEndpoint.GetById.replace(":teamId",teamId)).then((res)=>res.data);
}

export const UpdateTeam = (teamId:string,formData:FormData) => {
    return httpClient.put(MySchoolTournamentTeamsEndpoint.Edit.replace(":teamId",teamId),formData).then((res)=>res.data);
}

export const DeleteTeam = (teamId:string) => {
    return httpClient.delete(MySchoolTournamentTeamsEndpoint.Delete.replace(":teamId",teamId)).then((res)=>res.data);
}