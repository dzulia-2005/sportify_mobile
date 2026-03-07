import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type DataFieldProps = {
  value?: string;
  onChange: (date: string) => void;
  error?: string;
  placeholder?: string;
};

const formatDisplayDate = (value?: string) => {
  if (!value) return 'Select birth date';

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Select birth date';

  return date.toLocaleDateString('en-GB');
};

const DataField: React.FC<DataFieldProps> = ({
  value,
  onChange,
  error,
  placeholder = 'Select birth date',
}) => {
  const [open, setOpen] = useState(false);

  const pickerValue =
    value && !Number.isNaN(new Date(value).getTime())
      ? new Date(value)
      : new Date();

  const handleChange = (_event: unknown, selectedDate?: Date) => {
    setOpen(false);

    if (selectedDate) {
      const formatted = selectedDate.toISOString();
      onChange(formatted);
    }
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.input, error ? styles.inputError : null]}
        onPress={() => setOpen(true)}
      >
        <View style={styles.content}>
          <Text style={[styles.text, !value ? styles.placeholder : null]}>
            {value ? formatDisplayDate(value) : placeholder}
          </Text>
        </View>
      </TouchableOpacity>

      {open && (
        <DateTimePicker
          value={pickerValue}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          maximumDate={new Date()}
          onChange={handleChange}
          themeVariant='dark'
        />
      )}

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default DataField;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  input: {
    backgroundColor: '#374151',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1.5,
    borderColor: '#4b5563',
    minHeight: 52,
    justifyContent: 'center',
  },
  inputError: {
    borderColor: '#ef4444',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  placeholder: {
    color: '#9ca3af',
    fontWeight: '400',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 13,
    marginTop: 6,
    marginLeft: 4,
  },
});