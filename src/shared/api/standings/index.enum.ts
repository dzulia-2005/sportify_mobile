export const enum StandingEndpoints {
    GetStandings="/tournaments/:tournamentId/standings",
    GetStanding="/standings/:Id",
    AddStanding="/standings/addStanding",
    UpdateStanding="/standings/updateStanding/:Id",
    DeleteStanding="/standings/deleteStanding/:Id",
    GetStandingByTournament="/standings/tournaments/:tournamentId"
}