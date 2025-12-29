import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalContent: {
    width: 340,
    padding: 24,
    backgroundColor: '#1f2937',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTxt: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  chooseImgContainer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  chooseImgBtn: {
    backgroundColor: '#3b82f6', // ცისფერი ღილაკი
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    marginBottom: 12,
  },
  choosePhotoText: {
    color: '#fff',
    fontWeight: '600',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
  ModalBottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    gap: 12,
  },
  closeBtnContainer: {
    backgroundColor: '#ef4444', // წითელი ღილაკი
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  closeBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  createBtnContainer: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  createBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
