import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
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
  const [playerName, setPlayerName] = useState<string>('');
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
              <Text style={styles.headerText}>Add School Player</Text>
            </View>

            <StyledInput
              placeholder="FirstName"
              value={playerName}
              onChangeText={setPlayerName}
            />

            <StyledInput
              placeholder="LastName"
              value={playerName}
              onChangeText={setPlayerName}
            />

            <View style={styles.photoSection}>
              <TouchableOpacity onPress={pickImage} style={styles.photoButton}>
                <Text style={styles.photoButtonText}>Choose Photo</Text>
              </TouchableOpacity>

              {photoUri && (
                <View style={styles.photoSelectedContainer}>
                  <Text style={styles.photoSelectedText}>✓ Photo Selected</Text>
                </View>
              )}
            </View>

            <StyledInput
              placeholder="Position"
              value={playerName}
              onChangeText={setPlayerName}
            />

            <StyledInput
              placeholder="ParentFirstName"
              value={playerName}
              onChangeText={setPlayerName}
            />

            <StyledInput
              placeholder="ParentLastName"
              value={playerName}
              onChangeText={setPlayerName}
            />

            <StyledInput
              placeholder="ParentPhoneNumber"
              value={playerName}
              onChangeText={setPlayerName}
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>Add Player</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddMySchoolPlayerModal;

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
    width: 300,
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
    fontSize: 18,
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
  photoPreview: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 8,
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
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  createButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
  },
  createButtonText: {
    color: '#fff',
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
});
