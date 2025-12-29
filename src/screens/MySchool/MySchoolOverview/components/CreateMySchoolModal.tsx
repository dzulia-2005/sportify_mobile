import React, { useState } from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import StyledInput from '../../../../shared/components/StyledInput';
import { launchImageLibrary } from 'react-native-image-picker';

type AddSchoolModalProps = {
  visible: boolean;
  onClose: () => void;
};

const AddSchoolModal: React.FC<AddSchoolModalProps> = ({
  visible,
  onClose,
}) => {
  const [schoolName, setSchoolName] = useState<string>('');
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
          return;
        }

        if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
          Alert.alert('Error', response.errorMessage || 'Something went wrong');
          return;
        }

        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) {
            setPhotoUri(uri);
          }
        }
      },
    );
  };

  const handleCreate = () => {
    if (!schoolName.trim()) {
      Alert.alert('Error', 'Please enter school name');
      return;
    }
    console.log('School Name:', schoolName);
    console.log('Photo URI:', photoUri);
    onClose();
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Create School</Text>
            </View>

            <StyledInput
              placeholder="Enter School Name"
              value={schoolName}
              onChangeText={setSchoolName}
            />

            <View style={styles.photoSection}>
              <TouchableOpacity onPress={pickImage} style={styles.photoButton}>
                <Text style={styles.photoButtonText}>Choose School Logo</Text>
              </TouchableOpacity>

              {photoUri && (
                <View style={styles.photoSelectedContainer}>
                  <Text style={styles.photoSelectedText}>✓ Logo Selected</Text>
                  <Image
                    source={{ uri: photoUri }}
                    style={styles.photoPreview}
                  />
                </View>
              )}
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCreate}
                style={styles.createButton}
              >
                <Text style={styles.createButtonText}>Create School</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddSchoolModal;

const styles = StyleSheet.create({
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
    backgroundColor: 'rgba(0,0,0,0.6)', // ოდნავ მუქი ფონი
  },
  modalContent: {
    width: 340,
    padding: 24,
    backgroundColor: '#1f2937', // რბილი, მუქი კარდი
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  photoSection: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  photoButton: {
    backgroundColor: '#3b82f6', // ცისფერი, მუქი
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  photoButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  photoSelectedContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  photoSelectedText: {
    color: '#22c55e', // მწვანე
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  photoPreview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#22c55e',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    gap: 12,
  },
  closeButton: {
    backgroundColor: '#ef4444', // წითელი
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  createButton: {
    backgroundColor: '#22c55e', // მწვანე
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
