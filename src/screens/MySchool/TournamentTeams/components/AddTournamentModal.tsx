import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type AddMatchModalProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    name: string;
    mySchoolId: string;
    matchType: number;
    startDate: Date;
    endDate: Date;
  }) => void;
};

const AddTournamentModal: React.FC<AddMatchModalProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState('');
  const [mySchoolId, setMySchoolId] = useState('');
  const [matchType, setMatchType] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter tournament name';
    }

    if (!mySchoolId.trim()) {
      newErrors.mySchoolId = 'Please enter school ID';
    }

    if (endDate <= startDate) {
      newErrors.date = 'End date must be after start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (validateForm()) {
      const data = {
        name: name.trim(),
        mySchoolId: mySchoolId.trim(),
        matchType,
        startDate,
        endDate,
      };

      if (onSubmit) {
        onSubmit(data);
      }

      setName('');
      setMySchoolId('');
      setMatchType(0);
      setStartDate(new Date());
      setEndDate(new Date());
      setErrors({});

      onClose();
      Alert.alert('Success', 'Tournament created successfully');
    }
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GE', {
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
            <Text style={styles.headerText}>Create New Tournament</Text>
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
                Tournament Name <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={[styles.input, errors.name && styles.inputError]}
                placeholder="e.g. Summer Championship 2024"
                placeholderTextColor="#9ca3af"
                value={name}
                onChangeText={text => {
                  setName(text);
                  if (errors.name) setErrors({ ...errors, name: '' });
                }}
              />
              {errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
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
                  value={startDate}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  themeVariant="dark"
                  onChange={(event, date) => {
                    setShowStartPicker(false);
                    if (date) {
                      setStartDate(date);
                      if (errors.date) setErrors({ ...errors, date: '' });
                    }
                  }}
                />
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
                  value={endDate}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  themeVariant="dark"
                  onChange={(event, date) => {
                    setShowEndPicker(false);
                    if (date) {
                      setEndDate(date);
                      if (errors.date) setErrors({ ...errors, date: '' });
                    }
                  }}
                />
              )}

              {errors.date && (
                <Text style={styles.errorText}>{errors.date}</Text>
              )}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Match Type</Text>
              <View style={styles.matchTypeContainer}>
                <TouchableOpacity
                  style={[
                    styles.matchTypeButton,
                    matchType === 0 && styles.matchTypeSelected,
                  ]}
                  onPress={() => setMatchType(0)}
                >
                  <Text
                    style={[
                      styles.matchTypeText,
                      matchType === 0 && styles.matchTypeTextSelected,
                    ]}
                  >
                    🏆 Round Robin
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.matchTypeButton,
                    matchType === 1 && styles.matchTypeSelected,
                  ]}
                  onPress={() => setMatchType(1)}
                >
                  <Text
                    style={[
                      styles.matchTypeText,
                      matchType === 1 && styles.matchTypeTextSelected,
                    ]}
                  >
                    👥 Single Elimination
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.matchTypeButton,
                    matchType === 2 && styles.matchTypeSelected,
                  ]}
                  onPress={() => setMatchType(2)}
                >
                  <Text
                    style={[
                      styles.matchTypeText,
                      matchType === 2 && styles.matchTypeTextSelected,
                    ]}
                  >
                    🎯 Double Elimination
                  </Text>
                </TouchableOpacity>
              </View>
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
              onPress={handleCreate}
              activeOpacity={0.8}
            >
              <Text style={styles.createButtonText}>Create</Text>
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
