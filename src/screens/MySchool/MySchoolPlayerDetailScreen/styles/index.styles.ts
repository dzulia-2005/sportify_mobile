import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1b33',
    paddingVertical: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  position: {
    fontSize: 16,
    color: '#00aaff',
    marginTop: 4,
  },
  team: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 2,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2a3b5f',
  },
  label: {
    color: '#aaa',
    fontSize: 14,
  },
  value: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  card: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  playerName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  playerPosition: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  playerTeam: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  editBtn: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#4caf50',
    borderRadius: 4,
  },
  deleteBtn: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: '#f44336',
    borderRadius: 4,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  skeletonContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e5e7eb',
    overflow: 'hidden',
    position: 'relative',
  },

  shimmer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});
