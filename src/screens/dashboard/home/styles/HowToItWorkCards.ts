import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  CardContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 50,
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
    backgroundColor: '#00194C',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#0A192F',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 12,
    width: 300,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  number: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: '#3b82f6',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    fontWeight: 'bold',
  },
});
