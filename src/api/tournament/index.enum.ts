export const enum Tournament_Endpoint {
    Create="/tournaments/create",
    Update="/tournaments/update/:Id",
    GetAllTournament="/tournaments",
    GetTournamentById="/tournaments/:Id",
    CountChampions="/tournaments/:Id/champions-count",
    DeleteTournament="/tournaments/delete/:Id",
    MyTournament="/tournaments/my-tournaments"
}