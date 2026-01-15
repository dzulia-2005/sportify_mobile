export const enum MySchoolTournamentEndpoints {
  getByIdTournament = '/MySchoolTournament/:Id',
  createTournament = '/MySchoolTournament/create',
  getAllTournamentsBySchoolId = '/MySchoolTournament/school/:schoolId',
  GetTournamentBySchoolId = '/MySchoolTournament/school/:schoolId/tournament',
  DeleteTournament = '/MySchoolTournament/school/:tournamentId',
}
