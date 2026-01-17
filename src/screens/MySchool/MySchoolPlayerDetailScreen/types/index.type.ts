import { MySchoolPlayersResponse } from '../../../../shared/api/mySchoolPlayer/index.type';

export type HeaderProp = {
  Player: MySchoolPlayersResponse | undefined;
  isLoading: boolean;
};

export type AddMySchoolPlayerModalProps = {
  visible: boolean;
  onClose: () => void;
};

export type EditPlayerStatModalProps = {
  visible: boolean;
  onClose: () => void;
  player: MySchoolPlayersResponse | undefined;
};

export type EditPlayerType = {
  firstName: string;
  lastName: string;
  ProfilePictureFile: {
    uri: string;
    name?: string;
    type?: string;
  };
  position: string;
  parentFirstName: string;
  parentLastName: string;
  parentPhoneNumber: string;
  teamId: string;
};

export type PlayerStatProp = {
  Player: MySchoolPlayersResponse | undefined;
};
