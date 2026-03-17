import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { showErrorToast } from '../../../../../shared/utils/showErrorToast';
import { styles } from '../../styles/addTeamModal';
import { EditTeamModalProps } from '../../types/teams.type';
import { CreateTeamPayload } from '../../../../../shared/api/team/index.type';
import { teamSchema } from './schema';
import { useUpdateTeamMutation } from '../../../../../feature/tournament/team/model/update/useUpdateTeamMutation';

const EditTeamModal: React.FC<EditTeamModalProps> = ({
  visible,
  onClose,
  Id,
  tournamentId
}) => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [photoAsset, setPhotoAsset] = useState<any>(null);
  const { mutate: EditTeam, isPending } = useUpdateTeamMutation();

  const AddTeamDefaultValues:CreateTeamPayload = {
    name: '',
    coach:'',
    tournamentId: tournamentId || '',
    LogoFile: {
      uri: '',
    },
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm<CreateTeamPayload>({
    defaultValues: AddTeamDefaultValues,
    resolver: zodResolver(teamSchema),
  });

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
        selectionLimit: 1,
        includeBase64: false,
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'Failed to pick image');
          return;
        }

        const asset = response.assets?.[0];
        if (!asset?.uri) {
          return;
        }

        setPhotoUri(asset.uri);
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

  const handleCreate = (payload:CreateTeamPayload) => {

    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('tournamentId',tournamentId || "");
    formData.append('coach',payload.coach);

    if (photoAsset && photoAsset.uri) {
      const fileExtension = photoAsset.uri.split('.').pop() || 'jpg';
      const fileName =
        photoAsset.fileName || `school_logo_${Date.now()}.${fileExtension}`;

      formData.append('LogoFile', {
        uri: photoAsset.uri,
        type: photoAsset.type || 'image/jpeg',
        name: fileName,
      } as any);
    }

    EditTeam({TeamId:Id,formdata:formData}, {
      onSuccess: () => {
        onClose();
        reset();
        setPhotoUri(null);
        setPhotoAsset(null);
      },
      onError: err => {
        showErrorToast(err);
      },
    });
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
            <Text style={styles.headerText}>Edit Team</Text>
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
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[styles.input]}
                    placeholder="e.g. Warriors, Eagles, Champions"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.name && (
                <Text style={styles.errorText}>{errors.name?.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Coach <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="coach"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[styles.input]}
                    placeholder="enter coach"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.coach && (
                <Text style={styles.errorText}>{errors.coach?.message}</Text>
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
                      onPress={() => {
                        setPhotoUri(null);
                        setPhotoAsset(null);
                        setValue(
                          'LogoFile',
                          { uri: '' },
                          { shouldValidate: true },
                        );
                      }}
                      style={styles.removeImageBtn}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.removeImageText}>Remove</Text>
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
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onClose}
              activeOpacity={0.8}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.createButton}
              onPress={handleSubmit(handleCreate)}
              activeOpacity={0.8}
              disabled={isPending}
            >
              {isPending ? (
                <Text style={styles.createButtonText}>Editing...</Text>
              ) : (
                <Text style={styles.createButtonText}>Edit Team</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default EditTeamModal;
