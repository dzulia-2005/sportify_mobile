export const enum Player_Endpoint {
    GetALLPlayer="/players/getplayers",
    GetPlayerById="/players/getplayers/:id",
    CreatePlayer="/players/createplayer",
    UpdatePlayer="/players/updateplayer/:id",
    DeletePlayer="/players/deleteplayer/:id",
    GetTopPlayer="/players/:tournamentId/top-scorer",
    GetTopScorer="/players/:tournamentId/best-player",
    getPlayerByTournamentId="/players/tournament/:tournamentId"
}

