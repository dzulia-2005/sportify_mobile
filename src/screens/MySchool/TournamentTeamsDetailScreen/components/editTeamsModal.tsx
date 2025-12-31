import React, { useState } from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

type AddTeamModalProps = {
  visible: boolean;
  onClose: () => void;
};

const EditTeamModal: React.FC<AddTeamModalProps> = ({ visible, onClose }) => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [teamName, setTeamName] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          return;
        }
        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'Failed to pick image');
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

  const removeImage = () => {
    setPhotoUri(null);
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalBackground}
      >
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />

        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Edit School Team</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
              <Text style={styles.closeIconText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Team Name <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input, errors.teamName && styles.inputError]}
                placeholder="e.g. Warriors, Eagles, Champions"
                placeholderTextColor="#9ca3af"
                value={teamName}
                onChangeText={text => {
                  setTeamName(text);
                  if (errors.teamName) setErrors({ ...errors, teamName: '' });
                }}
              />
              {errors.teamName && (
                <Text style={styles.errorText}>{errors.teamName}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Team Logo</Text>

              {!photoUri ? (
                <TouchableOpacity
                  onPress={pickImage}
                  style={styles.uploadContainer}
                  activeOpacity={0.8}
                >
                  <View style={styles.uploadIcon}>
                    <Text style={styles.uploadIconText}>📷</Text>
                  </View>
                  <Text style={styles.uploadText}>Choose Team Logo</Text>
                  <Text style={styles.uploadSubtext}>
                    Tap to select an image
                  </Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.imagePreviewContainer}>
                  <Image
                    source={{ uri: photoUri }}
                    style={styles.imagePreview}
                  />
                  <View style={styles.imageOverlay}>
                    <TouchableOpacity
                      onPress={pickImage}
                      style={styles.changeImageBtn}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.changeImageText}>Change</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={removeImage}
                      style={styles.removeImageBtn}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.removeImageText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.cancelButton} activeOpacity={0.8}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createButton} activeOpacity={0.8}>
              <Text style={styles.createButtonText}>Edit Team</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default EditTeamModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#1f2937',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  headerText: {
    fontSize: 24,
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
    fontSize: 20,
    color: '#9ca3af',
    fontWeight: '600',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#e5e7eb',
    marginBottom: 8,
  },
  required: {
    color: '#ef4444',
  },
  input: {
    backgroundColor: '#374151',
    color: '#fff',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 13,
    marginTop: 6,
    marginLeft: 4,
  },
  uploadContainer: {
    backgroundColor: '#374151',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4b5563',
    borderStyle: 'dashed',
  },
  uploadIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#4b5563',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  uploadIconText: {
    fontSize: 32,
  },
  uploadText: {
    color: '#e5e7eb',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  uploadSubtext: {
    color: '#9ca3af',
    fontSize: 14,
  },
  imagePreviewContainer: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    gap: 8,
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  changeImageBtn: {
    flex: 1,
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  changeImageText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  removeImageBtn: {
    flex: 1,
    backgroundColor: '#ef4444',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  removeImageText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 12,
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
  cancelButtonText: {
    color: '#e5e7eb',
    fontWeight: '700',
    fontSize: 16,
  },
  createButton: {
    flex: 1,
    backgroundColor: '#10b981',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
