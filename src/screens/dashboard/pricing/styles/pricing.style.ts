import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },
  content: {
    padding: 16,
    paddingBottom: 28,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '#020617',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    position: 'relative',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#0b1830',
  },
  defaultCard: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
  },
  highlightCard: {
    borderWidth: 1,
    borderColor: 'rgba(14,165,233,0.45)',
    shadowColor: '#0EA5E9',
    shadowOpacity: 0.25,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  defaultBadge: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  highlightBadge: {
    borderWidth: 1,
    borderColor: 'rgba(14,165,233,0.30)',
    backgroundColor: 'rgba(14,165,233,0.15)',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  defaultBadgeText: {
    color: 'rgba(255,255,255,0.75)',
  },
  highlightBadgeText: {
    color: '#BAE6FD',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  planTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    marginTop: 6,
    color: 'rgba(255,255,255,0.60)',
    fontSize: 14,
    lineHeight: 20,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 18,
  },
  priceText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
  },
  durationText: {
    color: 'rgba(255,255,255,0.60)',
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 4,
  },
  button: {
    marginTop: 18,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultButton: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
  },
  highlightButton: {
    backgroundColor: 'rgba(14,165,233,0.20)',
    borderWidth: 1,
    borderColor: 'rgba(14,165,233,0.30)',
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  errorText: {
    marginTop: 10,
    color: '#FCA5A5',
    fontSize: 12,
  },
  divider: {
    marginTop: 18,
    marginBottom: 14,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.10)',
  },
  includedTitle: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 10,
  },
  featuresWrapper: {
    gap: 10,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  featureDot: {
    marginTop: 6,
    marginRight: 10,
  },
  featureText: {
    flex: 1,
    color: 'rgba(255,255,255,0.75)',
    fontSize: 14,
    lineHeight: 20,
  },
});
