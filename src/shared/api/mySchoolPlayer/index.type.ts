export type MySchoolPlayersResponse = {
    id: string
    mySchoolId: string
    teamName:string;
    teamId: string
    firstName: string
    lastName: string
    profilePictureUrl: string
    position: string
    parentFirstName: string
    parentLastName: string
    parentPhoneNumber: string
    goals: number
    assists: number
    matchesPlayed: number
    yellowCards: number
    redCards: number
    userId: string
    tournamentId: string
}

export type CreateMySchoolPayload = {
    firstName: string
    lastName: string
    ProfilePictureFile?: File
    position: string
    parentFirstName: string
    parentLastName: string
    parentPhoneNumber: string
    teamId: string
    mySchoolId: string
    userId: string
}

export type UpdateMySchoolPayload = {
    firstName: string;
    lastName: string;
    ProfilePictureFile?: File
    position: string;
    parentFirstName: string;
    parentLastName: string;
    parentPhoneNumber: string;
    teamId: string;
}

