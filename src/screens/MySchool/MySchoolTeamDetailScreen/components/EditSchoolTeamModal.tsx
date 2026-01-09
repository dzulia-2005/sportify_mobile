import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { editSchoolTeamSchema } from './editSchoolTeam.schema';
import { useUpdateMySchoolTeams } from '../../../../feature/mySchoolTeams/update/model/useUpdateMySchoolTeams';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import { launchImageLibrary } from 'react-native-image-picker';
import { EditSchoolTeamsType } from '../types/index.type';
import { useQueryClient } from '@tanstack/react-query';

type EditSchoolTeamModal = {
  visible: boolean;
  onClose: () => void;
  teamId: string;
};

const EditSchoolTeamModal: React.FC<EditSchoolTeamModal> = ({
  visible,
  onClose,
  teamId,
}) => {
  const EditSchoolTeamsInitialValues: EditSchoolTeamsType = {
    Name: '',
    LogoFile: {
      uri: '',
    },
  };
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [photoAsset, setPhotoAsset] = useState<any>(null);
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm<EditSchoolTeamsType>({
    defaultValues: EditSchoolTeamsInitialValues,
    resolver: zodResolver(editSchoolTeamSchema),
  });

  const PickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
        selectionLimit: 1,
        includeBase64: false,
      },
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

        setPhotoUrl(asset.uri);
        setPhotoAsset(asset);
        setValue(
          'LogoFile',
          {
            uri: asset.uri,
          },
          { shouldValidate: true },
        );
      },
    );
  };

  const { mutate: EditSchoolTeam, isPending } = useUpdateMySchoolTeams(teamId);

  const handleEditTeam = (payload: EditSchoolTeamsType) => {
    const formData = new FormData();
    formData.append('Name', payload.Name);
    if (photoAsset && photoAsset.uri) {
      const fileExtension = photoAsset.uri.split('.').pop() || 'jpg';
      const fileName =
        photoAsset.fileName || `school_logo_${Date.now()}.${fileExtension}`;

      formData.append('LogoFile', {
        uri: photoAsset.uri,
        type: photoAsset.type || 'image|jpeg',
        name: fileName,
      });
    }

    EditSchoolTeam(formData, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['getById'] });
        onClose();
        reset();
        setPhotoAsset(null);
        setPhotoUrl(null);
      },
      onError: err => {
        showErrorToast(err);
      },
    });
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.modalBackground}
      >
        <TouchableOpacity style={styles.backDrop} onPress={onClose} />
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Edit Team</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollContent}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Name<Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="Name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    placeholder="Team Name"
                  />
                )}
              />
              {errors.Name && (
                <Text style={styles.errorText}>{errors.Name?.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Logo<Text style={styles.required}>*</Text>
              </Text>
              {!photoUrl ? (
                <TouchableOpacity
                  style={styles.UploadImageContainer}
                  onPress={PickImage}
                >
                  <Text style={styles.UploadImageContainerText}>
                    Choose Team File
                  </Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.imagePreviewContainer}>
                  <Image
                    style={styles.imagePreview}
                    source={{ uri: photoUrl }}
                  />
                  <View>
                    <TouchableOpacity
                      onPress={PickImage}
                      style={styles.changeBtnContainer}
                    >
                      <Text style={styles.changeBtnContainer}>Change</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.deleteBtnContainer}
                      onPress={() => {
                        setPhotoUrl(null);
                        setValue(
                          'LogoFile',
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
              {errors.LogoFile?.uri && (
                <Text style={styles.errorText}>
                  {errors.LogoFile.uri.message}
                </Text>
              )}
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity onPress={onClose} style={styles.cancelBtn}>
              <Text style={styles.BtnText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSubmit(handleEditTeam)}
              style={styles.createBtn}
              disabled={isPending}
            >
              {isPending ? (
                <Text style={styles.BtnText}>Editing...</Text>
              ) : (
                <Text style={styles.BtnText}>Edit</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default EditSchoolTeamModal;

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backDrop: {
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
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
  },
  closeIcon: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    alignItems: 'center',
    justifyContent: 'center',
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
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  input: {
    backgroundColor: '#374151',
    color: '#fff',
    padding: 14,
    borderRadius: 14,
    fontSize: 16,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  UploadImageContainer: {
    backgroundColor: '#374151',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: '#4b5563',
    borderWidth: 2,
  },
  UploadImageContainerText: {
    color: '#fff',
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
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  changeBtnContainer: {
    flex: 1,
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteBtnContainer: {
    flex: 1,
    backgroundColor: '#ef4444',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 12,
  },
  cancelBtn: {
    flex: 1,
    backgroundColor: '#374151',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  createBtn: {
    flex: 1,
    backgroundColor: '#10b981',
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 12,
  },
  BtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  errorText: {
    color: '#ef4444',
    fontSize: 13,
    marginTop: 6,
    marginLeft: 4,
  },
});
