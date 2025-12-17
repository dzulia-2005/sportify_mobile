export const enum StandingEndpoints {
    GetStandings="/standings/:tournamentId/getStandings",
    GetStanding="/standings/:Id",
    AddStanding="/standings/addStanding",
    UpdateStanding="/standings/updateStanding/:Id",
    DeleteStanding="/standings/deleteStanding/:Id",
    GetStandingByTournament="/standings/tournaments/:tournamentId"
}