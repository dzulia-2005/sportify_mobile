import React from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangePasswordSchema } from './ChangePasswordSchema';
import { styles } from '../styles/index.styles';
import { useChangePasswordMutation } from '../../../../feature/auth/changePassword/model/useChangePasswordMutation';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import { useNavigation } from '@react-navigation/native';
import { ChangePasswordType, NavigationProp } from '../types/index.type';
import { ChangePasswordInitialValues } from './ChangePasswordInitialValues';

const Form: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: ChangePasswordInitialValues,
    resolver: zodResolver(ChangePasswordSchema),
  });

  const { mutate: ChangePassword, isPending } = useChangePasswordMutation();

  const handleChangePassword = (payload: ChangePasswordType) => {
    ChangePassword(payload, {
      onSuccess: () => {
        navigation.navigate('Login');
      },
      onError: err => {
        showErrorToast(err);
      },
    });
  };

  return (
    <>
      <Controller
        name="UserName"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholder="userName"
            placeholderTextColor="#a0aec0"
          />
        )}
      />
      {errors.UserName && (
        <Text style={styles.errorText}>{errors.UserName?.message}</Text>
      )}

      <Controller
        name="newPassword"
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholder="NewPassword"
            placeholderTextColor="#a0aec0"
            secureTextEntry
          />
        )}
      />
      {errors.newPassword && (
        <Text style={styles.errorText}>{errors.newPassword?.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleChangePassword)}
        disabled={isPending}
      >
        {isPending ? (
          <Text style={styles.buttonText}>Changing...</Text>
        ) : (
          <Text style={styles.buttonText}>Change</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default Form;
