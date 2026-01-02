export type AddPlayerType = {
  firstName: string;
  lastName: string;
  position: string;
  parentFirstName: string;
  parentLastName: string;
  parentPhoneNumber: string;
  ProfilePictureFile: {
    uri: string;
  };
  teamId: string;
  MySchoolId: string;
  UserId: string;
};

export type AddMatchModalProps = {
  visible: boolean;
  onClose: () => void;
};
