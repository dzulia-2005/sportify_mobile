import { QueryObserverResult } from '@tanstack/react-query';
import { MySchoolResponse } from '../../../../shared/api/mySchool/index.type';

export type AddSchoolModalProps = {
  visible: boolean;
  onClose: () => void;
};

export type SchoolDefaultTypes = {
  Name: string;
  LogoFile: {
    uri: string;
  };
};

export type SchoolProp = {
  school: MySchoolResponse | undefined;
  refetch: () => Promise<QueryObserverResult<MySchoolResponse, Error>>;
  isLoading: boolean;
};
