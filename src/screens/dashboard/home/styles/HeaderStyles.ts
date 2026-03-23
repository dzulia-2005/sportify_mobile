import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    height: 280,
    justifyContent: 'flex-start',
    paddingTop: 30,
    overflow: 'hidden',
  },

  overlay: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  darkOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  bottomTextContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  bottomTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  bottomSubtitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
    width: 300,
    lineHeight: 16,
  },
});
