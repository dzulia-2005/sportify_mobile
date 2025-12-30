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
});
