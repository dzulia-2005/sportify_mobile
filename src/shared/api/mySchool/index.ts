import { httpClient } from '..';
import { MySchoolEndpoints } from './index.enum';
import type { MySchoolResponse } from './index.type';

export const GetSchool = () => {
  return httpClient
    .get<MySchoolResponse>(MySchoolEndpoints.getSchool)
    .then(res => res.data);
};

export const getById = (Id: string) => {
  return httpClient
    .get<MySchoolResponse>(MySchoolEndpoints.getById.replace(':Id', Id))
    .then(res => res.data);
};

export const Create = (formdata: FormData) => {
  return httpClient
    .post(MySchoolEndpoints.Create, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => res.data);
};

export const Update = (Id: string, formdata: FormData) => {
  return httpClient
    .put(MySchoolEndpoints.Update.replace(':Id', Id), formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => res.data);
};

export const DeleteMySchool = (Id: string) => {
  return httpClient
    .delete(MySchoolEndpoints.Delete.replace(':Id', Id))
    .then(res => res.data);
};
