import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type StyledInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

const StyledInput: React.FC<StyledInputProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default StyledInput;

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    backgroundColor: 'rgba(255,255,255,0.1)',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
});
