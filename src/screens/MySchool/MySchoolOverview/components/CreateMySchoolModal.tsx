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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 320,
    padding: 20,
    backgroundColor: '#1d293d',
    borderRadius: 10,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  photoSection: {
    padding: 20,
    alignItems: 'center',
  },
  photoButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  photoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  photoSelectedContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  photoSelectedText: {
    color: '#4caf50',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  photoPreview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4caf50',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
    paddingTop: 10,
  },
  closeButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  createButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
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
