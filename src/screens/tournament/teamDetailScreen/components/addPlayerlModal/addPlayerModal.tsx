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
import { styles } from '../../../teams/styles/addTeamModal';
import { addPlayerSchema, AddPlayerFormValues } from './schema';
import { AddPlayerModalProps } from '../../types/teamDetail.type';
import DataField from '../../../../mySchool/mySchoolTeamDetailScreen/components/dataField';
import { CreatePlayerMutation } from '../../../../../feature/tournament/player/model/create/useCreatePlayerMutation';

const AddPlayerModal: React.FC<AddPlayerModalProps> = ({
  visible,
  onClose,
  teamId,
}) => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [photoAsset, setPhotoAsset] = useState<any>(null);

  const { mutate: createPlayer, isPending } = CreatePlayerMutation();

  const defaultValues: AddPlayerFormValues = {
    firstName: '',
    lastName: '',
    teamId: teamId || '',
    position: '',
    profilePictureFile: {
      uri: '',
    },
    birthDate: '',
    yellowCards: 0,
    redCards: 0,
    goals: 0,
    assists: 0,
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm<AddPlayerFormValues>({
    defaultValues,
    resolver: zodResolver(addPlayerSchema),
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
        if (response.didCancel) return;

        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'Failed to pick image');
          return;
        }

        const asset = response.assets?.[0];
        if (!asset?.uri) return;

        setPhotoUri(asset.uri);
        setPhotoAsset(asset);

        setValue(
          'profilePictureFile',
          { uri: asset.uri },
          { shouldValidate: true },
        );
      },
    );
  };

  const handleCreate = (payload: AddPlayerFormValues) => {
    const formData = new FormData();

    formData.append('firstName', payload.firstName);
    formData.append('lastName', payload.lastName);
    formData.append('teamId', payload.teamId);
    formData.append('position', payload.position);
    formData.append('birthDate', payload.birthDate);
    formData.append('goals', String(payload.goals));
    formData.append('assists', String(payload.assists));
    formData.append('yellowCards', String(payload.yellowCards));
    formData.append('redCards', String(payload.redCards));

    if (photoAsset?.uri) {
      const fileExtension = photoAsset.uri.split('.').pop() || 'jpg';
      const fileName =
        photoAsset.fileName || `player_${Date.now()}.${fileExtension}`;

      formData.append('profilePictureFile', {
        uri: photoAsset.uri,
        type: photoAsset.type || 'image/jpeg',
        name: fileName,
      } as any);
    }

    createPlayer(formData, {
      onSuccess: () => {
        onClose();
        reset({
          ...defaultValues,
          teamId: teamId || '',
        });
        setPhotoUri(null);
        setPhotoAsset(null);
      },
      onError: (err: any) => {
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
            <Text style={styles.headerText}>Add Player</Text>
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
                FirstName <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="firstName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    placeholder="firstName"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                lastName <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="lastName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    placeholder="lastName"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                position <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="position"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                    placeholder="position"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.position && (
                <Text style={styles.errorText}>{errors.position.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                birthDate <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="birthDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DataField
                    value={value}
                    onChange={onChange}
                    error={errors.birthDate?.message}
                  />
                )}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                goals <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="goals"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    keyboardType="number-pad"
                    onChangeText={text => {
                      const numericText = text.replace(/[^0-9]/g, '');
                      onChange(numericText === '' ? 0 : Number(numericText));
                    }}
                    value={String(value)}
                    style={styles.input}
                    placeholder="goals"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.goals && (
                <Text style={styles.errorText}>{errors.goals.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Red Cards <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="redCards"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    keyboardType="number-pad"
                    onChangeText={text => {
                      const numericText = text.replace(/[^0-9]/g, '');
                      onChange(numericText === '' ? 0 : Number(numericText));
                    }}
                    value={String(value)}
                    style={styles.input}
                    placeholder="redCards"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.redCards && (
                <Text style={styles.errorText}>{errors.redCards.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Yellow Cards <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="yellowCards"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    keyboardType="number-pad"
                    onChangeText={text => {
                      const numericText = text.replace(/[^0-9]/g, '');
                      onChange(numericText === '' ? 0 : Number(numericText));
                    }}
                    value={String(value)}
                    style={styles.input}
                    placeholder="yellowCards"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.yellowCards && (
                <Text style={styles.errorText}>
                  {errors.yellowCards.message}
                </Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Assists <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="assists"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    keyboardType="number-pad"
                    onChangeText={text => {
                      const numericText = text.replace(/[^0-9]/g, '');
                      onChange(numericText === '' ? 0 : Number(numericText));
                    }}
                    value={String(value)}
                    style={styles.input}
                    placeholder="assists"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.assists && (
                <Text style={styles.errorText}>{errors.assists.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Player Profile Image</Text>

              {!photoUri ? (
                <TouchableOpacity
                  onPress={pickImage}
                  style={styles.uploadContainer}
                  activeOpacity={0.8}
                >
                  <Text style={styles.uploadText}>Choose Player Image</Text>
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
                          'profilePictureFile',
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

              {errors.profilePictureFile?.uri && (
                <Text style={styles.errorText}>
                  {errors.profilePictureFile.uri.message}
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
              activeOpacity={0.8}
              disabled={isPending}
              onPress={handleSubmit(handleCreate)}
            >
              <Text style={styles.createButtonText}>
                {isPending ? 'Adding...' : 'Add Player'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddPlayerModal;
