import React, { useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

interface Tournament {
  id: string;
  name: string;
  startDate?: string;
}

interface Props {
  search: string;
}

const mockTournaments: Tournament[] = [
  {
    id: '1',
    name: 'ჩემპიონთა ლიგა 2024',
    startDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'გაზაფხულის ტურნირი',
    startDate: '2024-03-20',
  },
  {
    id: '3',
    name: 'ზაფხულის თასი',
    startDate: '2024-06-10',
  },
];

const TournamentCards: React.FC<Props> = ({ search }) => {
  const TournamentCards = mockTournaments;
  const isLoading = false;

  const filteredTournaments = useMemo(() => {
    if (!TournamentCards) return [];
    return TournamentCards.filter(t =>
      t.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }, [TournamentCards, search]);

  const renderTournamentCard = ({ item }: { item: Tournament }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <View style={styles.cardContent}>
        <View style={styles.tournamentInfo}>
          <Text style={styles.tournamentName}>{item.name}</Text>
          <Text style={styles.tournamentDate}>
            📅{' '}
            {item.startDate
              ? new Date(item.startDate).toLocaleDateString('ka-GE')
              : 'თარიღი უცნობია'}
          </Text>
        </View>
        <Text style={styles.chevronIcon}>›</Text>
      </View>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0ea5e9" />
        <Text style={styles.loadingText}>იტვირთება...</Text>
      </View>
    );
  }

  if (filteredTournaments.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.emptyText}>ტურნირები ვერ მოიძებნა</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={filteredTournaments}
      keyExtractor={item => item.id}
      renderItem={renderTournamentCard}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#0b1b33',
    borderWidth: 1,
    borderColor: '#ffffff1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tournamentInfo: {
    flex: 1,
  },
  tournamentName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 6,
  },
  tournamentDate: {
    fontSize: 14,
    color: '#ffffff99',
  },
  chevronIcon: {
    fontSize: 24,
    color: '#ffffff99',
    marginLeft: 12,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    color: '#ffffff99',
    marginTop: 12,
    fontSize: 16,
  },
  emptyText: {
    color: '#ffffff99',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TournamentCards;
