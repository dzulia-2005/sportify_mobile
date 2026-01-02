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
