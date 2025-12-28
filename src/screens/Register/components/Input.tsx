import React from 'react';
import { styles } from '../styles/RegisterStyles';
import { Text, TouchableOpacity, TextInput } from 'react-native';

const Input = () => {
  return (
    <>
      <TextInput
        placeholder="Enter UserName"
        style={styles.input}
        placeholderTextColor="#a0aec0"
      />

      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        placeholderTextColor="#a0aec0"
      />

      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        placeholderTextColor="#a0aec0"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Registration</Text>
      </TouchableOpacity>
    </>
  );
};

export default Input;
