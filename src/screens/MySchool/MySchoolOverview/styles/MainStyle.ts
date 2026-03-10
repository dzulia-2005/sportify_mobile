import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081120',
  },

  ImageMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  },

  ImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#22c55e',
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
    marginTop:80
  },

  image: {
    width: '100%',
    height: '100%',
  },

  infoWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 8,
  },

  infoCard: {
    width: '100%',
    backgroundColor: '#0f1c2e',
    borderRadius: 22,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.22,
    shadowRadius: 18,
    elevation: 10,
  },

  badge: {
    backgroundColor: 'rgba(34,197,94,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(34,197,94,0.35)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 16,
  },

  badgeText: {
    color: '#4ade80',
    fontSize: 13,
    fontWeight: '700',
  },

  schoolName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },

  schoolMeta: {
    color: '#94a3b8',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 4,
  },

  actionGroup: {
    width: '100%',
    marginTop: 22,
    gap: 12,
  },

  actionButton: {
    width: '100%',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryButton: {
    backgroundColor: '#3b82f6',
  },

  successButton: {
    backgroundColor: '#22c55e',
  },

  dangerButton: {
    backgroundColor: '#ef4444',
  },

  actionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },

  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyIconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  emptyIcon: {
    fontSize: 32,
  },

  emptyTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },

  emptyDescription: {
    color: '#94a3b8',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 20,
    paddingHorizontal: 8,
  },

  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },

  skeletonContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e5e7eb',
    overflow: 'hidden',
    position: 'relative',
  },

  shimmer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});