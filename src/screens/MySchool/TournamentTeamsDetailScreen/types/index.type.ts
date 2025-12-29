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
