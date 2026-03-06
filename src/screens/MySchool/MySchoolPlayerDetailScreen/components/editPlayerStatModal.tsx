import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import StyledInput from '../../../../shared/components/StyledInput';
import { StyleSheet } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import { EditPlayerStatModalProps } from '../types/index.type';
import { useEditPlayerStatMutation } from '../../../../feature/school/mySchoolPlayerStat/edit/model/useEditPlayerStatMutation';
import { UpdatePayload } from '../../../../shared/api/mySchoolPlayerStat/index.type';
import { EditPlayerStatSchema } from './editPlayerStatSchema';
import { useQueryClient } from '@tanstack/react-query';

const EditPlayerStatModal: React.FC<EditPlayerStatModalProps> = ({
  visible,
  onClose,
  player,
}) => {
  const UpdatePlayerStatDefaultValues: UpdatePayload = {
    goals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
  };
  const queryClient = useQueryClient();
  const { mutate: editPlayer, isPending } = useEditPlayerStatMutation(
    player?.id!,
  );
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UpdatePayload>({
    defaultValues: UpdatePlayerStatDefaultValues,
    resolver: zodResolver(EditPlayerStatSchema),
  });

  const handleEdit = (formData: UpdatePayload) => {
    editPlayer(formData, {
      onSuccess: () => {
        onClose();
        queryClient.invalidateQueries({ queryKey: ['getSchoolById'] });
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
                name="goals"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    placeholder="goals"
                    value={value === 0 ? '' : String(value)}
                    onChangeText={text =>
                      onChange(text === '' ? 0 : Number(text))
                    }
                  />
                )}
              />
              {errors.goals && (
                <Text style={styles.errorText}>{errors.goals?.message}</Text>
              )}
            </View>

            <View>
              <Controller
                name="assists"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    placeholder="assists"
                    value={value === 0 ? '' : String(value)}
                    onChangeText={text =>
                      onChange(text === '' ? 0 : Number(text))
                    }
                  />
                )}
              />
              {errors.assists && (
                <Text style={styles.errorText}>{errors.assists?.message}</Text>
              )}
            </View>

            <View>
              <Controller
                name="yellowCards"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    placeholder="yellowCards"
                    value={value === 0 ? '' : String(value)}
                    onChangeText={text =>
                      onChange(text === '' ? 0 : Number(text))
                    }
                  />
                )}
              />
              {errors.yellowCards && (
                <Text style={styles.errorText}>
                  {errors.yellowCards?.message}
                </Text>
              )}
            </View>

            <View>
              <Controller
                name="redCards"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    placeholder="redCards"
                    value={value === 0 ? '' : String(value)}
                    onChangeText={text =>
                      onChange(text === '' ? 0 : Number(text))
                    }
                  />
                )}
              />
              {errors.redCards && (
                <Text style={styles.errorText}>{errors.redCards?.message}</Text>
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

export default EditPlayerStatModal;

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
