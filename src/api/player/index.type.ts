export type CreatePlayerPayload = {
    firstName: string;
    teamId?: string; 
    lastName: string;
    childPersonalNumber?: string;
    position?: string;
    profilePictureFile?: File; 
    birthDate: Date;
    parentFirstName: string;
    parentLastName: string;
    parentPhoneNumber: string;
    previousFootballSchool?: string;
    hearingStatusInSchool?: string;
    yellowCards: number; 
    redCards: number;    
    goals: number;       
    assists: number;     
    matchesPlayed: number; 
}

export type GetAllPlayerResponse = {
    id: string; 
    teamName:string;
    firstName: string;
    lastName: string;
    childPersonalNumber?: string;
    position?: string;
    profilePicture?: string; 

    birthDate: Date|null;

    parentFirstName: string;
    parentLastName: string;
    parentPhoneNumber: string;

    previousFootballSchool?: string;
    hearingStatusInSchool?: string;

    yellowCards: number; 
    redCards: number;    
    goals: number;       
    assists: number;     
    matchesPlayed: number;
    tournamentId:string
}

export type GetPlayerResponse = {
    id:string;
    firstName: string;
    lastName: string;
    childPersonalNumber?: string;
    position?: string;
    profilePicture?: string; 

    birthDate: Date;

    parentFirstName: string;
    parentLastName: string;
    parentPhoneNumber: string;

    previousFootballSchool?: string;
    hearingStatusInSchool?: string;

    yellowCards: number; 
    redCards: number;    
    goals: number;       
    assists: number;     
    matchesPlayed: number;
    tournamentId:string
}

export type UpdatePlayerPayload = {
    firstName: string;
    lastName: string;
    childPersonalNumber?: string;
    position?: string;
    profilePictureFile?: File; 
    birthDate: Date;
    parentFirstName: string;
    parentLastName: string;
    parentPhoneNumber: string;
    previousFootballSchool?: string;
    hearingStatusInSchool?: string;
    yellowCards: number; 
    redCards: number;    
    goals: number;       
    assists: number;     
    matchesPlayed: number; 
}
