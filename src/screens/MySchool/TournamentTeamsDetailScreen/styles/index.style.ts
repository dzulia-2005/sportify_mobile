import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1b33',
  },
  headerContainer: {
    padding: 16,
    paddingTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  teamCount: {
    fontSize: 14,
    color: '#9ca3af',
  },
  listContent: {
    padding: 16,
    paddingBottom: 20,
  },
  teamCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#374151',
    padding: 16,
    borderRadius: 12,
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
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
    backgroundColor: '#4b5563',
  },
  teamInfo: {
    flex: 1,
  },
  teamName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  matchTypeBadge: {
    backgroundColor: '#4b5563',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  matchTypeText: {
    color: '#60a5fa',
    fontSize: 12,
    fontWeight: '600',
  },
  arrow: {
    color: '#9ca3af',
    fontSize: 24,
    fontWeight: '300',
    marginLeft: 8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    color: '#9ca3af',
    fontSize: 16,
  },
  AddTeamBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  AddBtn: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
  },
  AddBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  teamCardContainer: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#334155',
    position: 'relative',
    overflow: 'hidden',
  },

  teamLogoWrapper: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#0f172a',
    alignSelf: 'center',
    marginBottom: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#3b82f6',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },

  teamLogoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  teamDetailsSection: {
    alignItems: 'center',
    gap: 8,
  },

  teamTitleText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.3,
  },

  playersCountBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#1e3a8a',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 4,
  },

  playersCountLabel: {
    color: '#93c5fd',
    fontSize: 13,
    fontWeight: '600',
  },
  actionButtonsContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row', // ღილაკები გვერდიგვერდ
    zIndex: 10,
  },

  editButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#f59e0b',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#f59e0b',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
    marginRight: 6, // ეს ქმნის spacing პირველ ღილაკსა და მეორე შორის
  },

  removeButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ef4444',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ef4444',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  },
});
