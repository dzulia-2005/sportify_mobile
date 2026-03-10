import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  CardContainer: {
    flexDirection: 'column-reverse',
    justifyContent: 'space-around',
    gap:50,
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
    backgroundColor: '#0A0F24',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#1e293b',
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
    color: '#00c951',
    fontSize: 22,
    fontWeight: 'bold',
  },
  label: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
});