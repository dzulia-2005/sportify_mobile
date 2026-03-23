import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  CardContainer: {
    flexDirection: 'column-reverse',
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
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    fontWeight: '700',
  },
});
