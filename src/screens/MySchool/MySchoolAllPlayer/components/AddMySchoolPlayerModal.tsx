import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import StyledInput from '../../../../shared/components/StyledInput';
import { launchImageLibrary } from 'react-native-image-picker';

type AddMySchoolPlayerModalProps = {
  visible: boolean;
  onClose: () => void;
};

const AddMySchoolPlayerModal: React.FC<AddMySchoolPlayerModalProps> = ({
  visible,
  onClose,
}) => {
  const [playerFirstName, setPlayerFirstName] = useState('');
  const [playerLastName, setPlayerLastName] = useState('');
  const [position, setPosition] = useState('');
  const [parentFirstName, setParentFirstName] = useState('');
  const [parentLastName, setParentLastName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const pickImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1, selectionLimit: 1 },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'Something went wrong');
          return;
        }
        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) setPhotoUri(uri);
        }
      },
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.headerText}>Add School Player</Text>

          <ScrollView style={styles.formContainer}>
            <StyledInput
              placeholder="First Name"
              value={playerFirstName}
              onChangeText={setPlayerFirstName}
            />
            <StyledInput
              placeholder="Last Name"
              value={playerLastName}
              onChangeText={setPlayerLastName}
            />
            <StyledInput
              placeholder="Position"
              value={position}
              onChangeText={setPosition}
            />
            <StyledInput
              placeholder="Parent First Name"
              value={parentFirstName}
              onChangeText={setParentFirstName}
            />
            <StyledInput
              placeholder="Parent Last Name"
              value={parentLastName}
              onChangeText={setParentLastName}
            />
            <StyledInput
              placeholder="Parent Phone"
              value={parentPhone}
              onChangeText={setParentPhone}
            />

            <View style={styles.photoSection}>
              <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
                <Text style={styles.photoButtonText}>Choose Photo</Text>
              </TouchableOpacity>

              {photoUri && (
                <Image source={{ uri: photoUri }} style={styles.photoPreview} />
              )}
            </View>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createButton}>
              <Text style={styles.buttonText}>Add Player</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddMySchoolPlayerModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContent: {
    width: '100%',
    maxHeight: '90%',
    backgroundColor: '#1f2937',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  formContainer: {
    marginBottom: 20,
  },
  photoSection: {
    alignItems: 'center',
    marginVertical: 16,
  },
  photoButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 12,
  },
  photoButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  photoPreview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#22c55e',
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  closeButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  createButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
