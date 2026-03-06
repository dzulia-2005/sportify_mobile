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
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { tournamentSchema } from './Tournament.schema';
import { useCreateMySchoolTournamentMutation } from '../../../../feature/school/mySchoolTournament/create/model/useCreateMySchoolTournamentMutation';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import { AddMatchModalProps, addTournamentType } from '../types/index.type';
import { useGetMySchoolQuery } from '../../../../feature/school/mySchool/getSchool/model/useGetMySchoolQuery';
import { useQueryClient } from '@tanstack/react-query';

const AddTournamentModal: React.FC<AddMatchModalProps> = ({
  visible,
  onClose,
}) => {
  const { data: School } = useGetMySchoolQuery();
  const mySchoolId = School?.id;
  const queryClient = useQueryClient();
  const defaultValues: addTournamentType = {
    name: '',
    startDate: '',
    endDate: '',
    mySchoolId: mySchoolId!,
    matchType: 0,
  };

  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues,
    resolver: zodResolver(tournamentSchema),
  });

  const { mutate: CreateTournament, isPending } =
    useCreateMySchoolTournamentMutation();

  const startDate = watch('startDate');
  const endDate = watch('endDate');
  const matchType = watch('matchType');

  const handleCreate = (payload: addTournamentType) => {
    CreateTournament(payload, {
      onSuccess: () => {
        onClose();
        queryClient.invalidateQueries({
          queryKey: ['getMySchoolAllTournaments'],
        });
      },
      onError: err => {
        showErrorToast(err);
      },
    });
  };

  const formatDate = (date?: string) => {
    if (!date) return 'Select Date';
    return new Date(date).toLocaleDateString('en-GE', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
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
            <Text style={styles.headerText}>Create New Tournament</Text>
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
                Tournament Name <Text style={styles.required}>*</Text>
              </Text>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[styles.input, errors.name && styles.inputError]}
                    placeholder="e.g. Summer Championship 2024"
                    placeholderTextColor="#9ca3af"
                  />
                )}
              />
              {errors.name && (
                <Text style={styles.errorText}>{errors.name.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Start Date</Text>
              <TouchableOpacity
                style={styles.dateButton}
                onPress={() => setShowStartPicker(true)}
              >
                <Text style={styles.dateButtonText}>
                  {formatDate(startDate)}
                </Text>
              </TouchableOpacity>

              {showStartPicker && (
                <DateTimePicker
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  value={startDate ? new Date(startDate) : new Date()}
                  themeVariant="dark"
                  onChange={(_, date) => {
                    setShowStartPicker(false);
                    if (date) {
                      setValue('startDate', date.toISOString(), {
                        shouldValidate: true,
                      });
                    }
                  }}
                />
              )}
              {errors.startDate && (
                <Text style={styles.errorText}>{errors.startDate.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>End Date</Text>
              <TouchableOpacity
                style={styles.dateButton}
                onPress={() => setShowEndPicker(true)}
              >
                <Text style={styles.dateButtonText}>{formatDate(endDate)}</Text>
              </TouchableOpacity>

              {showEndPicker && (
                <DateTimePicker
                  value={endDate ? new Date(endDate) : new Date()}
                  onChange={(_, date) => {
                    setShowEndPicker(false);
                    if (date) {
                      setValue('endDate', date.toISOString(), {
                        shouldValidate: true,
                      });
                    }
                  }}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  themeVariant="dark"
                />
              )}

              {errors.endDate && (
                <Text style={styles.errorText}>{errors.endDate.message}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Match Type</Text>
              <View style={styles.matchTypeContainer}>
                {[0, 1, 2].map(type => (
                  <TouchableOpacity
                    key={type}
                    style={[
                      styles.matchTypeButton,
                      matchType === type && styles.matchTypeSelected,
                    ]}
                    onPress={() =>
                      setValue('matchType', type, { shouldValidate: true })
                    }
                  >
                    <Text style={styles.matchTypeTextSelected}>
                      {type === 0 && 'Round Robin'}
                      {type === 1 && 'Single Elimination'}
                      {type === 2 && 'Double Elimination'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
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

export default AddTournamentModal;

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
    fontWeight: '600',
    fontSize: 15,
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
