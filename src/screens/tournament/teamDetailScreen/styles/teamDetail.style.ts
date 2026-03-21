import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1220',
  },
  listContent: {
    paddingBottom: 24,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#0B1220',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  loadingText: {
    color: '#FFFFFF',
    marginTop: 12,
    fontSize: 16,
  },
  errorText: {
    color: '#F87171',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  headerWrapper: {
    padding: 16,
  },
  teamInfoCard: {
    backgroundColor: '#111827',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  teamLogo: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 14,
    backgroundColor: '#1F2937',
  },
  teamLogoFallback: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamLogoFallbackText: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '800',
  },
  teamName: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
  coachText: {
    color: '#9CA3AF',
    fontSize: 15,
    marginTop: 8,
  },
  statsRow: {
    width: '100%',
    marginTop: 18,
    marginBottom: 18,
  },
  statCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },
  statLabel: {
    color: '#9CA3AF',
    fontSize: 13,
    marginTop: 4,
  },
  addButton: {
    width: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  sectionRow: {
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },
  playerCard: {
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#111827',
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerImage: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#1F2937',
  },
  playerImageFallback: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerImageFallbackText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  playerContent: {
    flex: 1,
    marginLeft: 12,
  },
  playerName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  playerPosition: {
    color: '#60A5FA',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 10,
  },
  playerStatsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  smallStatBox: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 10,
    minWidth: 62,
    alignItems: 'center',
  },
  smallStatValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  smallStatLabel: {
    color: '#9CA3AF',
    fontSize: 11,
    marginTop: 2,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  emptySubtitle: {
    color: '#9CA3AF',
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
  },
});
