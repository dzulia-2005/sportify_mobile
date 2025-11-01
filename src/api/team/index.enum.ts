export const enum Team_Endpoints {
    GetAll="/teams",
    GetTeamById="/teams/:Id",
    CreateTeam="/teams/create-team",
    UpdateTeam="/teams/update-team/:teamId",
    DeleteTeam="/teams/delete-team/:teamId",
    getTeamByTournamentId="/teams/by-tournament/:tournamentId"
}