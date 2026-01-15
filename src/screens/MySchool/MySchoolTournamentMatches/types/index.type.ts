export interface Team {
  id: string;
  name: string;
  logoUrl: string;
}

export interface Match {
  id: string;
  teamAId: string;
  teamBId: string;
  teamAName: string;
  teamBName: string;
  teamALogoUrl: string;
  teamBLogoUrl: string;
  scoreA?: number;
  scoreB?: number;
  stage: string;
}

export interface TempScores {
  scoreA: number;
  scoreB: number;
  teamAId: string;
  teamBId: string;
}

export interface Tournament {
  id: string;
  name: string;
  matchType: number;
}

export type InfoBoxProps = {
  matchType: number;
  hasKnockoutStages?: boolean;
};
