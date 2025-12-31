import React, { useState } from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import StyledInput from '../../../../shared/components/StyledInput';
import { launchImageLibrary } from 'react-native-image-picker';

type AddMySchoolPlayerModalProps = {
  visible: boolean;
  onClose: () => void;
};

const EditMySchoolPlayerModal: React.FC<AddMySchoolPlayerModalProps> = ({
  visible,
  onClose,
}) => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [name, setName] = useState<string>('');

  const pickImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 0.8, selectionLimit: 1 },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'Failed to pick image');
          return;
        }
        const uri = response.assets?.[0]?.uri;
        if (uri) setPhotoUri(uri);
      },
    );
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <KeyboardAvoidingView
        style={styles.modalBackground}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableOpacity style={styles.backdrop} onPress={onClose} />

        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Edit School Player</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
              <Text style={styles.closeIconText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent}>
            <StyledInput
              placeholder="Player First Name"
              value={name}
              onChangeText={setName}
            />
            <StyledInput
              placeholder="Player Last Name"
              value={name}
              onChangeText={setName}
            />
            <StyledInput
              placeholder="Position"
              value={name}
              onChangeText={setName}
            />
            <StyledInput
              placeholder="Parent First Name"
              value={name}
              onChangeText={setName}
            />
            <StyledInput
              placeholder="Parent Last Name"
              value={name}
              onChangeText={setName}
            />
            <StyledInput
              placeholder="Parent Phone"
              value={name}
              onChangeText={setName}
            />

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Player Photo</Text>

              {!photoUri ? (
                <TouchableOpacity
                  style={styles.uploadContainer}
                  onPress={pickImage}
                >
                  <Text style={styles.uploadIcon}>📷</Text>
                  <Text style={styles.uploadText}>Choose Photo</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.imagePreviewContainer}>
                  <Image
                    source={{ uri: photoUri }}
                    style={styles.imagePreview}
                  />
                  <View style={styles.imageOverlay}>
                    <TouchableOpacity
                      style={styles.changeImageBtn}
                      onPress={pickImage}
                    >
                      <Text style={styles.btnText}>Change</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.removeImageBtn}
                      onPress={() => setPhotoUri(null)}
                    >
                      <Text style={styles.btnText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.footerText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.createButton}>
              <Text style={styles.footerText}>Edit Player</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default EditMySchoolPlayerModal;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContent: {
    backgroundColor: '#1f2937',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  closeIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIconText: {
    color: '#9ca3af',
    fontSize: 18,
  },
  scrollContent: {
    padding: 24,
  },
  inputGroup: {
    marginTop: 16,
  },
  label: {
    color: '#e5e7eb',
    fontWeight: '600',
    marginBottom: 8,
  },
  uploadContainer: {
    backgroundColor: '#374151',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#4b5563',
  },
  uploadIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  uploadText: {
    color: '#e5e7eb',
    fontWeight: '600',
  },
  imagePreviewContainer: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  imagePreview: {
    width: '100%',
    height: 200,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    gap: 8,
    padding: 12,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  changeImageBtn: {
    flex: 1,
    backgroundColor: '#3b82f6',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  removeImageBtn: {
    flex: 1,
    backgroundColor: '#ef4444',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    gap: 12,
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#374151',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#374151',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  createButton: {
    flex: 1,
    backgroundColor: '#10b981',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
