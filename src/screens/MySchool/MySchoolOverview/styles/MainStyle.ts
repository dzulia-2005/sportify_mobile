import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1b33',
  },
  ImageMainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  ImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#00c951',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  InfoContainer: {
    alignItems: 'center',
  },
  schoolName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  schoolCity: {
    color: '#aaa',
    fontSize: 16,
  },
  schoolFounded: {
    color: '#aaa',
    fontSize: 16,
    marginTop: 4,
  },
  BaseBtn: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 10,
    alignItems: 'center',
  },

  AddSchoolBtn: {
    backgroundColor: '#00c951',
  },

  EditSchoolBtn: {
    backgroundColor: '#4A90E2',
  },

  DeleteSchoolBtn: {
    backgroundColor: '#E74C3C',
  },

  BtnTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
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
