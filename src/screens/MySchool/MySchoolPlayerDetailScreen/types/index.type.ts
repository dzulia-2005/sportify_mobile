import { ImageURISource } from 'react-native';

export type HeaderProp = {
  imageSource: number | ImageURISource;
};

export type AddMySchoolPlayerModalProps = {
  visible: boolean;
  onClose: () => void;
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
