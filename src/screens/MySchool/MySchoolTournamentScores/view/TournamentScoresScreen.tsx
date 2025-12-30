import React from 'react';
import {
  View,
  Text,
  ScrollView,
  // Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

interface Standing {
  id: string;
  teamName: string;
  teamLogoUrl?: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

// Mock data
const mockStandings: Standing[] = [
  {
    id: '1',
    teamName: 'Warriors',
    teamLogoUrl: 'https://via.placeholder.com/50',
    played: 10,
    wins: 7,
    draws: 2,
    losses: 1,
    goalsFor: 25,
    goalsAgainst: 10,
    points: 23,
  },
  {
    id: '2',
    teamName: 'Eagles',
    teamLogoUrl: 'https://via.placeholder.com/50',
    played: 10,
    wins: 6,
    draws: 3,
    losses: 1,
    goalsFor: 22,
    goalsAgainst: 12,
    points: 21,
  },
  {
    id: '3',
    teamName: 'Thunder',
    teamLogoUrl: 'https://via.placeholder.com/50',
    played: 10,
    wins: 5,
    draws: 3,
    losses: 2,
    goalsFor: 18,
    goalsAgainst: 14,
    points: 18,
  },
];

const TournamentStandingsScreen = () => {
  const data = mockStandings;
  const isLoading = false;

  const standings: Standing[] = (data ?? []).slice().sort((a, b) => {
    const gdA = a.goalsFor - a.goalsAgainst;
    const gdB = b.goalsFor - b.goalsAgainst;
    if (b.points !== a.points) return b.points - a.points;
    if (gdB !== gdA) return gdB - gdA;
    return b.goalsFor - a.goalsFor;
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0ea5e9" />
        <Text style={styles.loadingText}>იტვირთება...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Standings</Text>

        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={[styles.headerCell, styles.rankCell]}>#</Text>
          <Text style={[styles.headerCell, styles.teamCell]}>Team</Text>
          <Text style={[styles.headerCell, styles.statCell]}>P</Text>
          <Text style={[styles.headerCell, styles.statCell]}>W</Text>
          <Text style={[styles.headerCell, styles.statCell]}>D</Text>
          <Text style={[styles.headerCell, styles.statCell]}>L</Text>
          <Text style={[styles.headerCell, styles.statCell]}>GF</Text>
          <Text style={[styles.headerCell, styles.statCell]}>GA</Text>
          <Text style={[styles.headerCell, styles.statCell]}>GD</Text>
          <Text style={[styles.headerCell, styles.statCell]}>Pts</Text>
        </View>

        {/* Table Body */}
        {standings.map((team, idx) => {
          const gd = team.goalsFor - team.goalsAgainst;
          return (
            <View
              key={team.id}
              style={[styles.tableRow, idx % 2 === 0 && styles.tableRowEven]}
            >
              <Text style={[styles.cell, styles.rankCell, styles.rankText]}>
                {idx + 1}
              </Text>
              <View style={[styles.cell, styles.teamCell, styles.teamInfo]}>
                {/* <Image
                  source={
                    team.teamLogoUrl && team.teamLogoUrl.trim() !== ''
                      ? { uri: team.teamLogoUrl }
                    
                  }
                  style={styles.teamLogo}
                /> */}
                <Text style={styles.teamName} numberOfLines={1}>
                  {team.teamName}
                </Text>
              </View>
              <Text style={[styles.cell, styles.statCell]}>{team.played}</Text>
              <Text style={[styles.cell, styles.statCell, styles.winsText]}>
                {team.wins}
              </Text>
              <Text style={[styles.cell, styles.statCell]}>{team.draws}</Text>
              <Text style={[styles.cell, styles.statCell, styles.lossesText]}>
                {team.losses}
              </Text>
              <Text style={[styles.cell, styles.statCell]}>
                {team.goalsFor}
              </Text>
              <Text style={[styles.cell, styles.statCell]}>
                {team.goalsAgainst}
              </Text>
              <Text style={[styles.cell, styles.statCell, styles.gdText]}>
                {gd > 0 ? `+${gd}` : gd}
              </Text>
              <Text style={[styles.cell, styles.statCell, styles.pointsText]}>
                {team.points}
              </Text>
            </View>
          );
        })}

        {standings.length === 0 && (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>სტენდინგი ჯერ ცარიელია</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#061325',
  },
  content: {
    paddingHorizontal: 12,
    paddingVertical: 32,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#061325',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#ffffff99',
    marginTop: 12,
    fontSize: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#ffffff0d',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    borderColor: '#ffffff1a',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ffffff0d',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  tableRowEven: {
    backgroundColor: '#ffffff0d',
  },
  headerCell: {
    color: '#ffffffb3',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  cell: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
  },
  rankCell: {
    width: 40,
  },
  teamCell: {
    flex: 1,
    textAlign: 'left',
  },
  statCell: {
    width: 35,
  },
  rankText: {
    fontWeight: '600',
  },
  teamInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  teamLogo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#0ea5e9',
  },
  teamName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  winsText: {
    color: '#4ade80',
    fontWeight: '600',
  },
  lossesText: {
    color: '#f87171',
    fontWeight: '600',
  },
  gdText: {
    fontWeight: '500',
  },
  pointsText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: '#ffffffb3',
    fontSize: 16,
  },
});

export default TournamentStandingsScreen;
