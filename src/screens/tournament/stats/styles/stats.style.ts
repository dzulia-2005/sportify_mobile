import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#071a2f',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  tabWrapper: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  tabButton: {
    backgroundColor: '#44506a',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  activeTabButton: {
    backgroundColor: '#11b44b',
    borderWidth: 2,
  },
  tabText: {
    color: '#e5e7eb',
    fontSize: 18,
    fontWeight: '700',
  },
  activeTabText: {
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#12284d',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#223a63',
    padding: 18,
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 72,
  },
  leftSide: {
    flex: 1,
    paddingRight: 12,
  },
  fullName: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
    textTransform: 'lowercase',
  },
  shortName: {
    color: '#a7b4c8',
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'lowercase',
  },
  valueText: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '800',
  },
  divider: {
    height: 1,
    backgroundColor: '#2a4067',
    marginVertical: 8,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#0a1324',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  loadingText: {
    color: '#9ca3af',
    fontSize: 16,
    marginTop: 12,
  },
});