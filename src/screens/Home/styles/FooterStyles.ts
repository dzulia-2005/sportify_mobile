import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0A0F24',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#1E293B',
    marginBottom: 15,
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 15,
  },
  icon: {
    color: '#3B82F6',
    fontSize: 22,
  },
  text: {
    color: '#94A3B8',
    fontSize: 13,
  },
  subText: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 4,
  },
});