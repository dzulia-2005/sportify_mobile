import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export type GetStanding = {
  id: string;
  teamName: string;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  gamePlayer: number;
  tournamentId: string;
  tournamentName: string;
};

const mockStandings: GetStanding[] = [
  {
    id: '1',
    teamName: 'Eagles',
    wins: 5,
    draws: 1,
    losses: 0,
    points: 16,
    gamePlayer: 6,
    tournamentId: 't1',
    tournamentName: 'School Championship',
  },
  {
    id: '2',
    teamName: 'Wolves',
    wins: 4,
    draws: 1,
    losses: 1,
    points: 13,
    gamePlayer: 6,
    tournamentId: 't1',
    tournamentName: 'School Championship',
  },
  {
    id: '3',
    teamName: 'Tigers',
    wins: 3,
    draws: 0,
    losses: 3,
    points: 9,
    gamePlayer: 6,
    tournamentId: 't1',
    tournamentName: 'School Championship',
  },
  {
    id: '4',
    teamName: 'Sharks',
    wins: 1,
    draws: 1,
    losses: 4,
    points: 4,
    gamePlayer: 6,
    tournamentId: 't1',
    tournamentName: 'School Championship',
  },
];

const ScoresScreen: React.FC = () => {
  const renderItem = ({ item, index }: { item: GetStanding; index: number }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{index + 1}</Text>
      <Text style={[styles.cell, styles.team]}>{item.teamName}</Text>
      <Text style={styles.cell}>{item.gamePlayer}</Text>
      <Text style={styles.cell}>{item.wins}</Text>
      <Text style={styles.cell}>{item.draws}</Text>
      <Text style={styles.cell}>{item.losses}</Text>
      <Text style={[styles.cell, styles.points]}>{item.points}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Standings</Text>

      {/* Header */}
      <View style={[styles.row, styles.header]}>
        <Text style={styles.headerCell}>#</Text>
        <Text style={[styles.headerCell, styles.team]}>Team</Text>
        <Text style={styles.headerCell}>GP</Text>
        <Text style={styles.headerCell}>W</Text>
        <Text style={styles.headerCell}>D</Text>
        <Text style={styles.headerCell}>L</Text>
        <Text style={styles.headerCell}>Pts</Text>
      </View>

      <FlatList
        data={mockStandings}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ScoresScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1324',
    padding: 16,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },

  header: {
    backgroundColor: '#16213e',
  },

  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1f2a44',
  },

  cell: {
    flex: 1,
    color: '#d1d5db',
    textAlign: 'center',
  },

  team: {
    flex: 2,
    textAlign: 'left',
    paddingLeft: 6,
  },

  points: {
    color: '#34d399',
    fontWeight: '700',
  },

  headerCell: {
    flex: 1,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
});