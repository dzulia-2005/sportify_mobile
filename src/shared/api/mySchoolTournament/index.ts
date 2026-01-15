import { httpClient } from '..';
import { MySchoolTournamentEndpoints } from './index.enum';
import type {
  MySchoolCreatePayload,
  MySchoolTournamentResponse,
  Tournament,
} from './index.type';

export const GetMySchoolTournamentById = (Id: string) => {
  return httpClient
    .get<MySchoolTournamentResponse>(
      MySchoolTournamentEndpoints.getByIdTournament.replace(':Id', Id),
    )
    .then(res => res.data);
};

export const CreateMySchoolTournament = (payload: MySchoolCreatePayload) => {
  return httpClient
    .post(MySchoolTournamentEndpoints.createTournament, payload)
    .then(res => res.data);
};

export const GetAllTournamentsInMySchoolBySchoolId = (schoolId: string) => {
  return httpClient
    .get<Tournament[]>(
      MySchoolTournamentEndpoints.getAllTournamentsBySchoolId.replace(
        ':schoolId',
        schoolId,
      ),
    )
    .then(res => res.data);
};

export const GetTournamentBySchoolId = (schoolId: string) => {
  return httpClient
    .get<Tournament>(
      MySchoolTournamentEndpoints.GetTournamentBySchoolId.replace(
        ':schoolId',
        schoolId,
      ),
    )
    .then(res => res.data);
};

export const DeleteTournamentById = (tournamentId: string) => {
  return httpClient
    .delete(
      MySchoolTournamentEndpoints.DeleteTournament.replace(
        ':tournamentId',
        tournamentId,
      ),
    )
    .then(res => res.data);
};
