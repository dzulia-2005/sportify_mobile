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
import { StyleSheet } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateMySchoolPlayerSchema } from './editPlayer.schema';
import { useUpdateMySchoolPlayerMutation } from '../../../../feature/mySchoolPlayer/update/model/useUpdateMySchoolPlayerMutation';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import {
  AddMySchoolPlayerModalProps,
  EditPlayerType,
} from '../types/index.type';

const EditMySchoolPlayerModal: React.FC<AddMySchoolPlayerModalProps> = ({
  visible,
  onClose,
}) => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const UpdatePlayerDefaultValues: EditPlayerType = {
    firstName: '',
    lastName: '',
    ProfilePictureFile: {
      uri: '',
      name: '',
      type: '',
    },
    position: '',
    parentFirstName: '',
    parentLastName: '',
    parentPhoneNumber: '',
    teamId: '3',
  };

  const pickImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 0.8, selectionLimit: 1 },
      response => {
        if (response.didCancel) return;
        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'Failed to pick image');
          return;
        }
        const asset = response.assets?.[0];
        if (!asset?.uri) {
          return;
        }
        setPhotoUri(asset.uri);
        setValue(
          'ProfilePictureFile',
          {
            uri: asset.uri,
            name: asset.fileName ?? 'image.jpg',
            type: asset.type ?? 'image/jpeg',
          },
          { shouldValidate: true },
        );
      },
    );
  };

  const { mutate: editPlayer, isPending } =
    useUpdateMySchoolPlayerMutation('3');
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<EditPlayerType>({
    defaultValues: UpdatePlayerDefaultValues,
    resolver: zodResolver(UpdateMySchoolPlayerSchema),
  });

  const handleEdit = (payload: EditPlayerType) => {
    const formData = new FormData();
    formData.append('firstName', payload.firstName);
    formData.append('lastName', payload.lastName);
    formData.append('ProfilePictureFile', {
      uri: payload.ProfilePictureFile.uri,
      name: payload.ProfilePictureFile.name ?? 'image.jpg',
      type: payload.ProfilePictureFile.type ?? 'image/jpeg',
    });
    formData.append('position', payload.position);
    formData.append('parentFirstName', payload.parentFirstName);
    formData.append('parentLastName', payload.parentLastName);
    formData.append('parentPhoneNumber', payload.parentPhoneNumber);
    formData.append('teamId', payload.teamId);

    editPlayer(formData, {
      onSuccess: () => {
        onClose();
      },
      onError: err => {
        showErrorToast(err);
      },
    });
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
            <View>
              <Controller
                name="firstName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    placeholder="Player First Name"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.firstName && (
                <Text style={styles.errorText}>
                  {errors.firstName?.message}
                </Text>
              )}
            </View>

            <View>
              <Controller
                name="lastName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    placeholder="Player Last Name"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName?.message}</Text>
              )}
            </View>

            <View>
              <Controller
                name="position"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    placeholder="Position"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.position && (
                <Text style={styles.errorText}>{errors.position?.message}</Text>
              )}
            </View>

            <View>
              <Controller
                name="parentFirstName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    placeholder="Parent First Name"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.parentFirstName && (
                <Text style={styles.errorText}>
                  {errors.parentFirstName?.message}
                </Text>
              )}
            </View>

            <View>
              <Controller
                name="parentLastName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    placeholder="Parent Last Name"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.parentLastName && (
                <Text style={styles.errorText}>
                  {errors.parentLastName?.message}
                </Text>
              )}
            </View>

            <View>
              <Controller
                name="parentPhoneNumber"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    placeholder="Parent Phone"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.parentPhoneNumber && (
                <Text style={styles.errorText}>
                  {errors.parentPhoneNumber?.message}
                </Text>
              )}
            </View>

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
                      onPress={() => {
                        setPhotoUri(null);
                        setValue(
                          'ProfilePictureFile',
                          { uri: '' },
                          { shouldValidate: true },
                        );
                      }}
                    >
                      <Text style={styles.btnText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              {errors.ProfilePictureFile?.uri && (
                <Text style={styles.errorText}>
                  {errors.ProfilePictureFile.uri.message}
                </Text>
              )}
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.footerText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.createButton}
              onPress={handleSubmit(handleEdit)}
              disabled={isPending}
            >
              {isPending ? (
                <Text style={styles.footerText}>Editing...</Text>
              ) : (
                <Text style={styles.footerText}>Edit Player</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default EditMySchoolPlayerModal;

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
  errorText: {
    color: '#ef4444',
    fontSize: 13,
    marginTop: 6,
    marginLeft: 4,
  },
});
