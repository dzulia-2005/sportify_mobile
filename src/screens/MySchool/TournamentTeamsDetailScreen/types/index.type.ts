export type Team = {
  id: string;
  tournamentId: string;
  name: string;
  logoUrl: string;
  matchType: number;
};

export type RenderTeamProps = {
  item: Team;
};

export type AddTeamModalProps = {
  visible: boolean;
  onClose: () => void;
};

export type AddTeamType = {
  Name: string;
  LogoFile: {
    uri: string;
  };
};
