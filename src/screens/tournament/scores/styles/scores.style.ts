import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  centerContainer: {
    flex: 1,
    backgroundColor: '#0a1324',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});