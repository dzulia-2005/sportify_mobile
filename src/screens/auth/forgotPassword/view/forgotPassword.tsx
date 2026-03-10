import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useForgotPasswordMutation } from '../../../../feature/auth/forgotPassword/model/useForgotPassword';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import Toast from 'react-native-toast-message';

const ForgotPassword: React.FC = () => {
  const { mutate: forgotPassword, isPending } = useForgotPasswordMutation();
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    if (!email.trim()) {
      showErrorToast('Please enter your email');
      return;
    }

    forgotPassword(
      { email },
      {
        onSuccess: (res: any) => {
          Toast.show({
            type: 'success',
            text1: res?.message ?? 'Reset link sent successfully!',
            text2: 'Please check your email.',
          });
        },
        onError: (err: any) => {
          showErrorToast(
            err?.message ?? 'Failed to send reset link. Please try again.',
          );
        },
      },
    );
  };

  return (
    <View style={styles.forgotPassContainer}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Sportify</Text>
      <Text style={styles.subtitle}>Reset your password</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#a0aec0"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={[styles.button, isPending && styles.buttonDisabled]}
        onPress={handleForgotPassword}
        disabled={isPending}
      >
        <Text style={styles.buttonText}>
          {isPending ? 'Sending...' : 'Send Reset Link'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  forgotPassContainer: {
    flex: 1,
    backgroundColor: '#0b1b33',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: '#00b4d8',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: 16,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    backgroundColor: '#11294f',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    color: '#fff',
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: '#0077b6',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});