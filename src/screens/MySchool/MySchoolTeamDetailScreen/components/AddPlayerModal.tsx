import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
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
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { AddMySchoolPlayerSchema,type AddPlayerType } from './addPlayer.schema';
import { useCreateMySchoolPlayerMutation } from '../../../../feature/school/mySchoolPlayer/create/model/useCreateMySchoolPlayerMutation';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import { AddMatchModalProps } from '../types/index.type';
import { useGetMySchoolQuery } from '../../../../feature/school/mySchool/getSchool/model/useGetMySchoolQuery';
import { useMeQuery } from '../../../../feature/auth/me/model/useMeQuery';
import DataField from './dataField';

const AddPlayerModal: React.FC<AddMatchModalProps> = ({
  visible,
  onClose,
  teamId,
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageAsset, setImageAsset] = useState<any>(null);
  const { data: school } = useGetMySchoolQuery();
  const schoolId = school?.id;
  const { data: user } = useMeQuery();
  const userId = user?.id;

  const defaultValues = useMemo<AddPlayerType>(
    () => ({
      FirstName: '',
      LastName: '',
      Position: '',
      ParentFirstName: '',
      ParentLastName: '',
      ParentPhoneNumber: '',
      ProfilePictureFile: {
        uri: '',
      },
      TeamId: teamId || '',
      MySchoolId: schoolId || '',
      UserId: userId || '',
      Nationality:'',
      birthDate:'',
    }),
    [teamId, schoolId, userId],
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm<AddPlayerType>({
    defaultValues: defaultValues,
    resolver: zodResolver(AddMySchoolPlayerSchema),
  });

  useEffect(() => {
    if (teamId && schoolId && userId) {
      reset(defaultValues);
    }
  }, [schoolId, userId, teamId, reset, defaultValues]);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.7,
        includeBase64: false,
      },
      response => {
        if (response.didCancel) {
          return;
        }
        if (response.errorCode) {
          Alert.alert('Error', response.errorMessage || 'failed to pick image');
          return;
        }

        const asset = response.assets?.[0];
        if (!asset?.uri) {
          return;
        }

        setProfileImage(asset.uri);
        setImageAsset(asset);
        setValue(
          'ProfilePictureFile',
          {
            uri: asset.uri,
          },
          {
            shouldValidate: true,
          },
        );
      },
    );
  };

  const { mutate: CreatePlayer, isPending } = useCreateMySchoolPlayerMutation();

  const handleCreatePlayer = (payload: AddPlayerType) => {
    const formData = new FormData();
    formData.append('FirstName', payload.FirstName);
    formData.append('LastName', payload.LastName);
    formData.append('ParentFirstName', payload.ParentFirstName);
    formData.append('ParentLastName', payload.ParentLastName);
    formData.append('ParentPhoneNumber', payload.ParentPhoneNumber);
    formData.append('Position', payload.Position);
    formData.append("Nationality",payload.Nationality);
    if(payload.birthDate){
      formData.append('birthDate',payload.birthDate);
    }
    formData.append('TeamId', payload.TeamId);
    formData.append('MySchoolId', payload.MySchoolId);
    formData.append('UserId', payload.UserId);

    if (imageAsset && imageAsset.uri) {
      const fileExtension = imageAsset.uri.split('.').pop() || 'jpg';
      const fileName =
        imageAsset.uri || `school_logo_${Date.now()}.${fileExtension}`;

      formData.append('ProfilePictureFile', {
        uri: imageAsset.uri,
        type: imageAsset.type || 'image/jpeg',
        name: fileName,
      });
    }

    CreatePlayer(formData, {
      onSuccess: () => {
        onClose();
        reset();
        setImageAsset(null);
        setProfileImage(null);
      },
      onError: err => {
        showErrorToast(err);
        onClose();
      },
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
              <Controller
                name="FirstName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[styles.input]}
                    placeholder="e.g nick"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.FirstName && (
                <Text style={styles.errorText}>
                  {errors.FirstName?.message}
                </Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                LastName <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="LastName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[styles.input]}
                    placeholder="e.g dzuliashvili"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.LastName && (
                <Text style={styles.errorText}>{errors.LastName?.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Player Photo</Text>

              {!profileImage ? (
                <TouchableOpacity
                  style={styles.uploadContainer}
                  onPress={pickImage}
                >
                  <Text style={styles.uploadText}>Choose Photo</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.imagePreviewContainer}>
                  <Image
                    source={{ uri: profileImage }}
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
                        setProfileImage(null);
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

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Nationality <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="Nationality"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[styles.input]}
                    placeholder="Nationality"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.Nationality && (
                <Text style={styles.errorText}>{errors.Nationality?.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
               BirthDate <Text style={styles.required}>*</Text>
              </Text>
                <Controller
                  name='birthDate'
                  control={control}
                  render={({field:{onChange,value}})=>(
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
                Position <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="Position"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[styles.input]}
                    placeholder="Position"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.Position && (
                <Text style={styles.errorText}>{errors.Position?.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                ParentFirstName <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="ParentFirstName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[styles.input]}
                    placeholder="ParentFirstName"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.ParentFirstName && (
                <Text style={styles.errorText}>
                  {errors.ParentFirstName?.message}
                </Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                ParentLastName <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="ParentLastName"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[styles.input]}
                    placeholder="ParentLastName"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.ParentLastName && (
                <Text style={styles.errorText}>
                  {errors.ParentLastName?.message}
                </Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                ParentPhoneNumber <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="ParentPhoneNumber"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[styles.input]}
                    placeholder="ParentPhoneNumber"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.ParentPhoneNumber && (
                <Text style={styles.errorText}>
                  {errors.ParentPhoneNumber?.message}
                </Text>
              )}
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

            <TouchableOpacity
              style={styles.createButton}
              activeOpacity={0.8}
              disabled={isPending}
              onPress={handleSubmit(handleCreatePlayer)}
            >
              {isPending ? (
                <Text style={styles.createButtonText}>Creating...</Text>
              ) : (
                <Text style={styles.createButtonText}>Create</Text>
              )}
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
});
