import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

type AddMatchModalProps = {
  visible: boolean;
  onClose: () => void;
};

const AddPlayerModal: React.FC<AddMatchModalProps> = ({ visible, onClose }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.7 }, response => {
      if (response.didCancel) {
        return;
      }
      if (response.assets && response.assets[0]?.uri) {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={handleClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalBackground}
      >
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={handleClose}
        />

        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Create New Player</Text>
            <TouchableOpacity onPress={handleClose} style={styles.closeIcon}>
              <Text style={styles.closeIconText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                FirstName <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input]}
                placeholder="e.g nick"
                placeholderTextColor="#9ca3af"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                LastName <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input]}
                placeholder="e.g dzuliashvili"
                placeholderTextColor="#9ca3af"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                ProfilePicture <Text style={styles.required}>*</Text>
              </Text>
              <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                {profileImage ? (
                  <Image
                    source={{ uri: profileImage }}
                    style={styles.previewImage}
                  />
                ) : (
                  <Text style={styles.imagePlaceholder}>Choose image</Text>
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                ProfilePictureFile <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input]}
                placeholder="e.g dzuliashvili"
                placeholderTextColor="#9ca3af"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Position <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input]}
                placeholder="Position"
                placeholderTextColor="#9ca3af"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                ParentFirstName <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input]}
                placeholder="ParentFirstName"
                placeholderTextColor="#9ca3af"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                ParentLastName <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input]}
                placeholder="ParentLastName"
                placeholderTextColor="#9ca3af"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                ParentPhoneNumber <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input]}
                placeholder="ParentPhoneNumber"
                placeholderTextColor="#9ca3af"
              />
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleClose}
              activeOpacity={0.8}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createButton} activeOpacity={0.8}>
              <Text style={styles.createButtonText}>Create</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddPlayerModal;

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
    marginBottom: 20,
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
  previewImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
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
  dateButton: {
    backgroundColor: '#374151',
    padding: 14,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4b5563',
  },
  dateIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  dateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  matchTypeContainer: {
    flexDirection: 'column',
    gap: 12,
  },
  matchTypeButton: {
    flex: 1,
    padding: 16,
    backgroundColor: '#374151',
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4b5563',
  },
  matchTypeSelected: {
    backgroundColor: '#10b981',
    borderColor: '#059669',
  },
  matchTypeText: {
    color: '#9ca3af',
    fontWeight: '600',
    fontSize: 15,
  },
  matchTypeTextSelected: {
    color: '#fff',
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
  imagePicker: {
    backgroundColor: '#374151',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#4b5563',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholder: {
    color: '#9ca3af',
    fontSize: 16,
  },
  imageSelectedText: {
    color: '#10b981',
    fontSize: 16,
    fontWeight: '600',
  },
});
