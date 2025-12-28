import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import StyledInput from '../../../../shared/components/StyledInput';
import { launchImageLibrary } from 'react-native-image-picker';
import { AddTeamModalProps } from '../types/index.type';
import { styles } from '../styles/createMySchoolTeamModal';

const AddTeamModal: React.FC<AddTeamModalProps> = ({ visible, onClose }) => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [teamName, setTeamName] = useState<string>('');

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      console.log('Response:', response);

      if (response.didCancel) {
        console.log('User cancelled');
        return;
      }

      if (response.errorCode) {
        console.log('Error:', response.errorMessage);
        return;
      }

      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          console.log('Selected URI:', uri);
          setPhotoUri(uri);
        }
      }
    });
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
            <View style={styles.headerContainer}>
              <Text style={styles.headerTxt}>Create School Team</Text>
            </View>

            <StyledInput
              placeholder="Enter Team Name"
              value={teamName}
              onChangeText={setTeamName}
            />

            <View style={styles.chooseImgContainer}>
              <TouchableOpacity onPress={pickImage} style={styles.chooseImgBtn}>
                <Text style={styles.choosePhotoText}>Choose Photo</Text>
              </TouchableOpacity>
              {photoUri && (
                <Image source={{ uri: photoUri }} style={styles.image} />
              )}
            </View>

            <View style={styles.ModalBottomButtonContainer}>
              <TouchableOpacity
                onPress={onClose}
                style={styles.closeBtnContainer}
              >
                <Text style={styles.closeBtnText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.createBtnContainer}>
                <Text style={styles.createBtnText}>Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddTeamModal;
