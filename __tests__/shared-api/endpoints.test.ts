const mockHttpClient = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
};

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock(
  '@env',
  () => ({
    BASE_URL: 'https://example.test',
  }),
  { virtual: true },
);

import { httpClient } from '../../src/shared/api';
import * as authApi from '../../src/shared/api/auth';
import { Auth_Endpoints } from '../../src/shared/api/auth/index.enum';
import * as billingApi from '../../src/shared/api/billing';
import { BillingEndpoint } from '../../src/shared/api/billing/index.enum';
import * as teamApi from '../../src/shared/api/team';
import { Team_Endpoints } from '../../src/shared/api/team/index.enum';
import * as tournamentApi from '../../src/shared/api/tournament';
import { Tournament_Endpoint } from '../../src/shared/api/tournament/index.enum';
import * as matchApi from '../../src/shared/api/match';
import { Match_Endpoint } from '../../src/shared/api/match/index.enum';
import * as mySchoolApi from '../../src/shared/api/mySchool';
import { MySchoolEndpoints } from '../../src/shared/api/mySchool/index.enum';
import * as mySchoolTeamsApi from '../../src/shared/api/mySchoolTeams';
import { MySchoolTeamEndpoints } from '../../src/shared/api/mySchoolTeams/index.enum';
import * as mySchoolPlayerApi from '../../src/shared/api/mySchoolPlayer';
import { MySchoolPlayersEndpoint } from '../../src/shared/api/mySchoolPlayer/index.enum';
import * as mySchoolMatchesApi from '../../src/shared/api/mySchoolMatches';
import { MySchoolMatchesEndpoints } from '../../src/shared/api/mySchoolMatches/index.enum';
import * as mySchoolPlayerStatApi from '../../src/shared/api/mySchoolPlayerStat';
import { MySchoolPlayerStatEndpoint } from '../../src/shared/api/mySchoolPlayerStat/index.enum';
import * as myTournamentTeamsApi from '../../src/shared/api/myTournamentTeams';
import { MySchoolTournamentTeamsEndpoint } from '../../src/shared/api/myTournamentTeams/index.enum';
import * as standingsApi from '../../src/shared/api/standings';
import { StandingEndpoints } from '../../src/shared/api/standings/index.enum';
import * as stageApi from '../../src/shared/api/stage';
import { Stage_Endpoints } from '../../src/shared/api/stage/index.enum';
import * as venueApi from '../../src/shared/api/venue';
import { Venue_Endpoint } from '../../src/shared/api/venue/index.enum';
import * as playerApi from '../../src/shared/api/player';
import { Player_Endpoint } from '../../src/shared/api/player/index.enum';
import * as matchEventApi from '../../src/shared/api/matchEvent';
import { MatchEvent_Endpoints } from '../../src/shared/api/matchEvent/index.enum';
import * as planApi from '../../src/shared/api/plan';
import * as mySchoolStandingApi from '../../src/shared/api/mySchoolStanding';
import { MySchoolStandingEndpoint } from '../../src/shared/api/mySchoolStanding/index.enum';

const mockResponse = <T>(data: T) => Promise.resolve({ data });

describe('shared/api endpoint wrappers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (httpClient as any).get = mockHttpClient.get;
    (httpClient as any).post = mockHttpClient.post;
    (httpClient as any).put = mockHttpClient.put;
    (httpClient as any).delete = mockHttpClient.delete;
  });

  describe('auth api', () => {
    it('calls register endpoint', async () => {
      const payload = { email: 'a@test.com' } as any;
      mockHttpClient.post.mockReturnValue(mockResponse({ ok: true }));

      await expect(authApi.Register(payload)).resolves.toEqual({ ok: true });

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        Auth_Endpoints.REGISTER,
        payload,
      );
    });

    it('calls login endpoint', async () => {
      const payload = { userName: 'nika', password: 'secret123' } as any;
      mockHttpClient.post.mockReturnValue(mockResponse({ accessToken: 'x' }));

      await authApi.Login(payload);

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        Auth_Endpoints.LOGIN,
        payload,
      );
    });

    it('calls refresh endpoint with nested payload', async () => {
      const payload = { accessToken: 'a', refreshToken: 'b' };
      mockHttpClient.post.mockReturnValue(mockResponse({ accessToken: 'c' }));

      await authApi.Refresh({ payload });

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        Auth_Endpoints.REFRESH,
        payload,
      );
    });

    it('calls me, logout, reset password and forgot password endpoints', async () => {
      mockHttpClient.get.mockReturnValue(mockResponse({ id: '1' }));
      mockHttpClient.post.mockReturnValue(mockResponse({ ok: true }));

      await authApi.Me();
      await authApi.LogOut();
      await authApi.ResetPassword({ password: '12345678' } as any);
      await authApi.ForgotPassword({ email: 'a@test.com' } as any);

      expect(mockHttpClient.get).toHaveBeenCalledWith(Auth_Endpoints.ME);
      expect(mockHttpClient.post).toHaveBeenNthCalledWith(
        1,
        Auth_Endpoints.LOGOUT,
      );
      expect(mockHttpClient.post).toHaveBeenNthCalledWith(
        2,
        Auth_Endpoints.ResetPassword,
        { password: '12345678' },
      );
      expect(mockHttpClient.post).toHaveBeenNthCalledWith(
        3,
        Auth_Endpoints.forgotPassword,
        { email: 'a@test.com' },
      );
    });
  });

  describe('billing and plan api', () => {
    it('calls checkout and subscription endpoints', async () => {
      const payload = { planCode: 2 } as any;
      mockHttpClient.post.mockReturnValue(mockResponse({ redirectUrl: 'url' }));
      mockHttpClient.get.mockReturnValue(mockResponse({ planCode: 'PRO' }));

      await billingApi.checkout(payload);
      await billingApi.subscription();

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        BillingEndpoint.checkout,
        payload,
      );
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        BillingEndpoint.subscription,
      );
    });

    it('calls plan endpoint', async () => {
      mockHttpClient.get.mockReturnValue(mockResponse([]));

      await planApi.getPlan();

      expect(mockHttpClient.get).toHaveBeenCalledWith('/plan');
    });
  });

  describe('team api', () => {
    it('calls team endpoints with correct params', async () => {
      const formData = {} as FormData;
      mockHttpClient.get.mockReturnValue(mockResponse([]));
      mockHttpClient.post.mockReturnValue(mockResponse({}));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.delete.mockReturnValue(mockResponse({}));

      await teamApi.GetAllTeams();
      await teamApi.GetById('team-1');
      await teamApi.CreateTeam(formData);
      await teamApi.UpdateTeam({ TeamId: 'team-2', formdata: formData });
      await teamApi.DeleteTeam('team-3');
      await teamApi.getTeamByTournamentId('tour-1');

      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        Team_Endpoints.GetAll,
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        Team_Endpoints.GetTeamById.replace(':Id', 'team-1'),
      );
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        Team_Endpoints.CreateTeam,
        formData,
      );
      expect(mockHttpClient.put).toHaveBeenCalledWith(
        Team_Endpoints.UpdateTeam.replace(':teamId', 'team-2'),
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        Team_Endpoints.DeleteTeam.replace(':teamId', 'team-3'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        3,
        Team_Endpoints.getTeamByTournamentId.replace(':tournamentId', 'tour-1'),
      );
    });
  });

  describe('tournament api', () => {
    it('calls tournament CRUD and query endpoints', async () => {
      const formData = {} as FormData;
      mockHttpClient.post.mockReturnValue(mockResponse({}));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.get.mockReturnValue(mockResponse([]));
      mockHttpClient.delete.mockReturnValue(mockResponse({}));

      await tournamentApi.CreateTournament(formData);
      await tournamentApi.UpdateTournament({ Id: '1', formdata: formData });
      await tournamentApi.GetAllTournament();
      await tournamentApi.GetAllTournament(true);
      await tournamentApi.GetTournamentById('2');
      await tournamentApi.GetChampions('3');
      await tournamentApi.DeleteTournament('4');
      await tournamentApi.MyTournament();

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        Tournament_Endpoint.Create,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } },
      );
      expect(mockHttpClient.put).toHaveBeenCalledWith(
        Tournament_Endpoint.Update.replace(':Id', '1'),
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } },
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        Tournament_Endpoint.GetAllTournament,
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        `${Tournament_Endpoint.GetAllTournament}?isPublic=true`,
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        3,
        Tournament_Endpoint.GetTournamentById.replace(':Id', '2'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        4,
        Tournament_Endpoint.CountChampions.replace(':Id', '3'),
      );
      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        Tournament_Endpoint.DeleteTournament.replace(':Id', '4'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        5,
        Tournament_Endpoint.MyTournament,
      );
    });
  });

  describe('match api', () => {
    it('calls match endpoints and strips update payload correctly', async () => {
      mockHttpClient.get.mockReturnValue(mockResponse([]));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.delete.mockReturnValue(mockResponse({}));

      await matchApi.GetAllMatches('t1');
      await matchApi.GetMatchesById('t1', 'm1');
      await matchApi.UpdateMatches({
        tournamentId: 't1',
        matchId: 'm1',
        homeScore: 1,
        awayScore: 2,
        homeTeamName: 'A',
        awayTeamName: 'B',
      } as any);
      await matchApi.DeleteMatch('t1', 'm2');

      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        Match_Endpoint.GetAll.replace(':tournamentId', 't1'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        Match_Endpoint.ById.replace(':tournamentId', 't1').replace(':id', 'm1'),
      );
      expect(mockHttpClient.put).toHaveBeenCalledWith(
        Match_Endpoint.Update.replace(':tournamentId', 't1').replace(
          ':id',
          'm1',
        ),
        {
          homeTeamName: 'A',
          awayTeamName: 'B',
          homeScore: 1,
          awayScore: 2,
        },
      );
      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        Match_Endpoint.Delete.replace(':tournamentId', 't1').replace(
          ':id',
          'm2',
        ),
      );
    });
  });

  describe('mySchool api', () => {
    it('calls school endpoints', async () => {
      const formData = {} as FormData;
      mockHttpClient.get.mockReturnValue(mockResponse({}));
      mockHttpClient.post.mockReturnValue(mockResponse({}));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.delete.mockReturnValue(mockResponse({}));

      await mySchoolApi.GetSchool();
      await mySchoolApi.getById('school-1');
      await mySchoolApi.Create(formData);
      await mySchoolApi.Update('school-2', formData);
      await mySchoolApi.DeleteMySchool('school-3');

      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        MySchoolEndpoints.getSchool,
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        MySchoolEndpoints.getById.replace(':Id', 'school-1'),
      );
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        MySchoolEndpoints.Create,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      expect(mockHttpClient.put).toHaveBeenCalledWith(
        MySchoolEndpoints.Update.replace(':Id', 'school-2'),
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        MySchoolEndpoints.Delete.replace(':Id', 'school-3'),
      );
    });
  });

  describe('mySchool teams and player endpoints', () => {
    it('calls mySchoolTeams endpoints', async () => {
      const formData = {} as FormData;
      mockHttpClient.get.mockReturnValue(mockResponse({}));
      mockHttpClient.post.mockReturnValue(mockResponse({}));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.delete.mockReturnValue(mockResponse({}));

      await mySchoolTeamsApi.GetTeamsBySchoolId('school-1');
      await mySchoolTeamsApi.GetById('team-1');
      await mySchoolTeamsApi.UpdateTeam('team-2', formData);
      await mySchoolTeamsApi.CreateTeam(formData);
      await mySchoolTeamsApi.deleteTeam('team-3');
      await mySchoolTeamsApi.GetPlayersByTeamId('team-4');

      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        MySchoolTeamEndpoints.getSchoolId.replace(':schoolId', 'school-1'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        MySchoolTeamEndpoints.getById.replace(':Id', 'team-1'),
      );
      expect(mockHttpClient.put).toHaveBeenCalledWith(
        MySchoolTeamEndpoints.Update.replace(':id', 'team-2'),
        formData,
      );
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        MySchoolTeamEndpoints.Create,
        formData,
      );
      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        MySchoolTeamEndpoints.Delete.replace(':Id', 'team-3'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        3,
        MySchoolTeamEndpoints.GetByTeamId.replace(':teamId', 'team-4'),
      );
    });

    it('calls mySchoolPlayer endpoints', async () => {
      const formData = {} as FormData;
      mockHttpClient.get.mockReturnValue(mockResponse({}));
      mockHttpClient.post.mockReturnValue(mockResponse({}));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.delete.mockReturnValue(mockResponse({}));

      await mySchoolPlayerApi.GetByIdMySchoolPlayer('player-1');
      await mySchoolPlayerApi.CreateMySchoolPlayer(formData);
      await mySchoolPlayerApi.UpdateMySchoolPlayer('player-2', formData);
      await mySchoolPlayerApi.DeleteMySchoolPlayer('player-3');
      await mySchoolPlayerApi.GetAllPlayerMySchool('school-2');

      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        MySchoolPlayersEndpoint.getById.replace(':Id', 'player-1'),
      );
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        MySchoolPlayersEndpoint.Create,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );
      expect(mockHttpClient.put).toHaveBeenCalledWith(
        MySchoolPlayersEndpoint.Update.replace(':Id', 'player-2'),
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );
      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        MySchoolPlayersEndpoint.Delete.replace(':Id', 'player-3'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        MySchoolPlayersEndpoint.getAllPlayers.replace(':schoolId', 'school-2'),
      );
    });
  });

  describe('mySchool matches and stats endpoints', () => {
    it('calls mySchoolMatches endpoints', async () => {
      mockHttpClient.get.mockReturnValue(mockResponse({}));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.post.mockReturnValue(mockResponse({}));

      await mySchoolMatchesApi.GetAllMySchoolMatches('tour-1');
      await mySchoolMatchesApi.GetById('match-1');
      await mySchoolMatchesApi.EditMatch('match-2', { homeScore: 1 } as any);
      await mySchoolMatchesApi.GenerateMatches('tour-2');

      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        MySchoolMatchesEndpoints.getAllMatches.replace(
          ':tournamentId',
          'tour-1',
        ),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        MySchoolMatchesEndpoints.getById.replace(':id', 'match-1'),
      );
      expect(mockHttpClient.put).toHaveBeenCalledWith(
        MySchoolMatchesEndpoints.UpdateMatch.replace(':id', 'match-2'),
        { homeScore: 1 },
      );
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        MySchoolMatchesEndpoints.GenerateMatch.replace(
          ':tournamentId',
          'tour-2',
        ),
      );
    });

    it('calls mySchoolPlayerStat endpoints', async () => {
      const payload = { goals: 2 } as any;
      mockHttpClient.get.mockReturnValue(mockResponse([]));
      mockHttpClient.post.mockReturnValue(mockResponse({}));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.delete.mockReturnValue(mockResponse({}));

      await mySchoolPlayerStatApi.getByMatchId('match-1');
      await mySchoolPlayerStatApi.getByPlayerId('player-1');
      await mySchoolPlayerStatApi.CreatePlayerStat(payload);
      await mySchoolPlayerStatApi.UpdatePlayerStat('stat-1', payload);
      await mySchoolPlayerStatApi.DeletePlayerStat('stat-2');
      await mySchoolPlayerStatApi.EditPlayerStat('player-2', payload);

      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        MySchoolPlayerStatEndpoint.getByMatchId.replace(':matchId', 'match-1'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        MySchoolPlayerStatEndpoint.getByPlayerId.replace(
          ':playerId',
          'player-1',
        ),
      );
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        MySchoolPlayerStatEndpoint.Create,
        payload,
      );
      expect(mockHttpClient.put).toHaveBeenNthCalledWith(
        1,
        MySchoolPlayerStatEndpoint.Update.replace(':Id', 'stat-1'),
        payload,
      );
      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        MySchoolPlayerStatEndpoint.Delete.replace(':Id', 'stat-2'),
      );
      expect(mockHttpClient.put).toHaveBeenNthCalledWith(
        2,
        MySchoolPlayerStatEndpoint.EditPlayerId.replace(
          ':playerId',
          'player-2',
        ),
        payload,
      );
    });
  });

  describe('tournament related supporting endpoints', () => {
    it('calls myTournamentTeams endpoints', async () => {
      const formData = {} as FormData;
      mockHttpClient.post.mockReturnValue(mockResponse({}));
      mockHttpClient.get.mockReturnValue(mockResponse([]));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.delete.mockReturnValue(mockResponse({}));

      await myTournamentTeamsApi.CreateMyTournamentTeams('tour-1', formData);
      await myTournamentTeamsApi.GetAllTeams('tour-1');
      await myTournamentTeamsApi.GetTeamById('team-1');
      await myTournamentTeamsApi.UpdateTeam('team-2', formData);
      await myTournamentTeamsApi.DeleteTeam('team-3');

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        MySchoolTournamentTeamsEndpoint.Create.replace(
          ':tournamentId',
          'tour-1',
        ),
        formData,
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        MySchoolTournamentTeamsEndpoint.GetAllTeams.replace(
          ':tournamentId',
          'tour-1',
        ),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        MySchoolTournamentTeamsEndpoint.GetById.replace(':teamId', 'team-1'),
      );
      expect(mockHttpClient.put).toHaveBeenCalledWith(
        MySchoolTournamentTeamsEndpoint.Edit.replace(':teamId', 'team-2'),
        formData,
      );
      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        MySchoolTournamentTeamsEndpoint.Delete.replace(':teamId', 'team-3'),
      );
    });

    it('calls standings endpoints', async () => {
      const payload = { teamId: '1' } as any;
      mockHttpClient.get.mockReturnValue(mockResponse([]));
      mockHttpClient.post.mockReturnValue(mockResponse({}));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.delete.mockReturnValue(mockResponse({}));

      await standingsApi.GetAllStanding('tour-1');
      await standingsApi.GetStandingById('standing-1');
      await standingsApi.AddStanding(payload);
      await standingsApi.UpdateStanding('standing-2', payload);
      await standingsApi.DeleteStanding('standing-3');
      await standingsApi.GetStandingByTournament('tour-2');

      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        StandingEndpoints.GetStandings.replace(':tournamentId', 'tour-1'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        StandingEndpoints.GetStanding.replace(':Id', 'standing-1'),
      );
      expect(mockHttpClient.post).toHaveBeenCalledWith(
        StandingEndpoints.AddStanding,
        payload,
      );
      expect(mockHttpClient.put).toHaveBeenCalledWith(
        StandingEndpoints.UpdateStanding.replace(':Id', 'standing-2'),
        payload,
      );
      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        StandingEndpoints.DeleteStanding.replace(':Id', 'standing-3'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        3,
        StandingEndpoints.GetStandingByTournament.replace(
          ':tournamentId',
          'tour-2',
        ),
      );
    });

    it('calls stage and venue endpoints', async () => {
      const payload = { name: 'Stage 1' } as any;
      mockHttpClient.get.mockReturnValue(mockResponse([]));
      mockHttpClient.post.mockReturnValue(mockResponse({}));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.delete.mockReturnValue(mockResponse({}));

      await stageApi.GetAllStages('tour-1');
      await stageApi.GetByTournamentId('tour-2');
      await stageApi.GetById('stage-1');
      await stageApi.CreateStage(payload);
      await stageApi.UpdateStage({ Id: 'stage-2', payload });
      await stageApi.DeleteStage('stage-3');

      await venueApi.GetAllVenue();
      await venueApi.GetVenueById('venue-1');
      await venueApi.CreateVenue(payload);
      await venueApi.UpdateVenue({ Id: 'venue-2', payload });
      await venueApi.DeleteVenue('venue-3');

      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        Stage_Endpoints.GetAll.replace(':tournamentId', 'tour-1'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        Stage_Endpoints.GetByTournamentId.replace(':tournamentId', 'tour-2'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        3,
        Stage_Endpoints.GetById.replace(':Id', 'stage-1'),
      );
      expect(mockHttpClient.post).toHaveBeenNthCalledWith(
        1,
        Stage_Endpoints.CreateStage,
        payload,
      );
      expect(mockHttpClient.put).toHaveBeenNthCalledWith(
        1,
        Stage_Endpoints.UpdateStage.replace(':Id', 'stage-2'),
        payload,
      );
      expect(mockHttpClient.delete).toHaveBeenNthCalledWith(
        1,
        Stage_Endpoints.DeleteStage.replace(':Id', 'stage-3'),
      );

      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        4,
        Venue_Endpoint.GetAll,
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        5,
        Venue_Endpoint.GetById.replace(':Id', 'venue-1'),
      );
      expect(mockHttpClient.post).toHaveBeenNthCalledWith(
        2,
        Venue_Endpoint.Create_Venue,
        payload,
      );
      expect(mockHttpClient.put).toHaveBeenNthCalledWith(
        2,
        Venue_Endpoint.Update_Venue.replace(':Id', 'venue-2'),
        payload,
      );
      expect(mockHttpClient.delete).toHaveBeenNthCalledWith(
        2,
        Venue_Endpoint.Delete_Venue.replace(':Id', 'venue-3'),
      );
    });
  });

  describe('player and match event endpoints', () => {
    it('calls player CRUD endpoints', async () => {
      const formData = {} as FormData;
      mockHttpClient.post.mockReturnValue(mockResponse({}));
      mockHttpClient.get.mockReturnValue(mockResponse([]));
      mockHttpClient.put.mockReturnValue(mockResponse({}));
      mockHttpClient.delete.mockReturnValue(mockResponse({}));

      await playerApi.CreatePlayer(formData);
      await playerApi.GetAllPlayer();
      await playerApi.GetPlayerById('player-1');
      await playerApi.UpdatePlayerById({ Id: 'player-2', formdata: formData });
      await playerApi.DeletePlayerById('player-3');
      await playerApi.GetPlayerByTournamentId('tour-1');

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        Player_Endpoint.CreatePlayer,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        1,
        Player_Endpoint.GetALLPlayer,
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        2,
        Player_Endpoint.GetPlayerById.replace(':id', 'player-1'),
      );
      expect(mockHttpClient.put).toHaveBeenCalledWith(
        Player_Endpoint.UpdatePlayer.replace(':id', 'player-2'),
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      expect(mockHttpClient.delete).toHaveBeenCalledWith(
        Player_Endpoint.DeletePlayer.replace(':id', 'player-3'),
      );
      expect(mockHttpClient.get).toHaveBeenNthCalledWith(
        3,
        Player_Endpoint.getPlayerByTournamentId.replace(
          ':tournamentId',
          'tour-1',
        ),
      );
    });

    it('returns empty arrays for top player endpoints on 404', async () => {
      const axios404Error = { isAxiosError: true, response: { status: 404 } };
      mockHttpClient.get.mockRejectedValue(axios404Error);

      await expect(playerApi.GetTopScorers('tour-1')).resolves.toEqual([]);
      await expect(playerApi.GetBestPlayer('tour-1')).resolves.toEqual([]);
    });

    it('rethrows non-404 player endpoint errors', async () => {
      const axios500Error = { isAxiosError: true, response: { status: 500 } };
      mockHttpClient.get.mockRejectedValue(axios500Error);

      await expect(playerApi.GetTopScorers('tour-1')).rejects.toBe(
        axios500Error,
      );
    });

    it('calls match event endpoints', async () => {
      const payload = { matchId: 'm1' };
      mockHttpClient.post.mockReturnValue(mockResponse({}));
      mockHttpClient.get.mockReturnValue(mockResponse([]));

      await matchEventApi.CreateMatchEvent({ payload } as any);
      await matchEventApi.GetByMatchEvent('match-1');

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        MatchEvent_Endpoints.Create_MatchEvent,
        payload,
      );
      expect(mockHttpClient.get).toHaveBeenCalledWith(
        MatchEvent_Endpoints.GetByMatchId.replace(':matchId', 'match-1'),
      );
    });

    it('calls mySchool standings endpoint', async () => {
      mockHttpClient.get.mockReturnValue(mockResponse([]));

      await mySchoolStandingApi.GetStandings('tour-5');

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        MySchoolStandingEndpoint.GetAllStanding.replace(
          ':tournamentId',
          'tour-5',
        ),
      );
    });
  });
});
