import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerText: {
    paddingVertical: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderSecondText: {
    color: '#A1A1A1',
    fontWeight: '600',
    fontSize: 16,
  },
  HeaderFirstText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 10,
  },
  CardContainer: {
    paddingHorizontal: 40,
    paddingVertical: 50,
  },
  card: {
    backgroundColor: '#0A192F',
    padding: 24,
    borderRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 20,
  },
  quote: {
    color: '#D1D5DB',
    fontStyle: 'italic',
    marginBottom: 16,
    textAlign: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  role: {
    color: '#9CA3AF',
    fontSize: 12,
  },
});
