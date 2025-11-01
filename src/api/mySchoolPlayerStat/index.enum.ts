export const enum MySchoolPlayerStatEndpoint  {
    getByMatchId="/MySchoolPlayerStats/match/:matchId",
    getByPlayerId="/MySchoolPlayerStats/player/:playerId",
    Create="/MySchoolPlayerStats/create",
    Update="/MySchoolPlayerStats/update/:Id",
    Delete="/MySchoolPlayerStats/delete/:Id",
    EditPlayerId="/MySchoolPlayerStats/update-by-player/:playerId"
}