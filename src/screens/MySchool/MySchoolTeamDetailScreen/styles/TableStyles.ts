import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#0b1830',
    padding: 10,
  },
  container: {
    backgroundColor: '#0b1120',
    borderRadius: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#131b33',
    paddingVertical: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerText: {
    color: '#bfc4d6',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0e1630',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1a2444',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cell: {
    color: '#dfe6f2',
    fontSize: 14,
    textAlign: 'center',
  },
});