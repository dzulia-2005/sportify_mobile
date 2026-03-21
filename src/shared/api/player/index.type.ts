export type CreatePlayerPayload = {
  firstName: string;
  teamId?: string;
  lastName: string;
  position?: string;
  profilePictureFile: {
    uri: string;
  };
  birthDate: string;
  yellowCards: number;
  redCards: number;
  goals: number;
  assists: number;
};

export type GetAllPlayerResponse = {
  id: string;
  teamName: string;
  firstName: string;
  lastName: string;
  position?: string;
  profilePicture?: string;
  birthDate: Date | null;
  yellowCards: number;
  redCards: number;
  goals: number;
  assists: number;
  tournamentId: string;
};

export type GetPlayerResponse = {
  id: string;
  teamName: string;
  firstName: string;
  lastName: string;
  position?: string;
  profilePicture?: string;
  birthDate: Date | null;
  yellowCards: number;
  redCards: number;
  goals: number;
  assists: number;
  tournamentId: string;
};

export type UpdatePlayerPayload = {
  firstName: string;
  lastName: string;
  position?: string;
  profilePictureFile?: File;
  birthDate: Date;
  yellowCards: number;
  redCards: number;
  goals: number;
  assists: number;
};
