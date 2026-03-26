import React from 'react';
import { styles } from '../styles/RegisterStyles';
import { Text, TouchableOpacity, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRegisterMutation } from '../../../../feature/auth/register/model/useRegisterMutation';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from './register.schema';
import axios from 'axios';
import { Toast } from '@ant-design/react-native';
import { NavigationProps, RegisterType } from '../types/index.type';
import { translate } from '../../../../shared/lib/i18n';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const RegisterInitialValues: RegisterType = {
  userName: '',
  password: '',
  email: '',
};

const Input = () => {
  const navigation = useNavigation<NavigationProps>();
  const { t } = useI18n();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: RegisterInitialValues,
    resolver: zodResolver(RegisterSchema),
  });
  const { mutate: Register, isPending } = useRegisterMutation();

  const handleRegister = (regiserValues: RegisterType) => {
    Register(regiserValues, {
      onSuccess: () => {
        navigation.navigate('Login');
      },
      onError: err => {
        if (axios.isAxiosError(err)) {
          const status = err.response?.status;
          if (status === 400) {
            Toast.fail(
              translate('Invalid registration data. Please check your inputs.'),
            );
          } else if (status === 409) {
            Toast.fail(
              translate('User already exists with this email or username.'),
            );
          } else {
            Toast.fail(
              translate('An unexpected error occurred. Please try again.'),
            );
          }
        } else {
          Toast.fail(
            translate('An unexpected error occurred. Please try again.'),
          );
        }
      },
    });
  };

  return (
    <>
      <Controller
        name="userName"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={t('Enter UserName')}
            style={styles.input}
            placeholderTextColor="#a0aec0"
          />
        )}
      />
      {errors.userName && (
        <Text style={styles.errorText}>{t(errors.userName?.message)}</Text>
      )}

      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder={t('Enter Email')}
            style={styles.input}
            placeholderTextColor="#a0aec0"
          />
        )}
      />
      {errors.email && (
        <Text style={styles.errorText}>{t(errors.email?.message)}</Text>
      )}

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={t('Enter Password')}
            style={styles.input}
            placeholderTextColor="#a0aec0"
          />
        )}
      />
      {errors.password && (
        <Text style={styles.errorText}>{t(errors.password?.message)}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleRegister)}
      >
        {isPending ? (
          <Text style={styles.buttonText}>{t('Signing up...')}</Text>
        ) : (
          <Text style={styles.buttonText}>{t('Sign up')}</Text>
        )}
      </TouchableOpacity>

      <View style={styles.haveAccount}>
        <Text style={styles.AccountText}>{t('Have you Account?')}</Text>
        <TouchableOpacity
          style={styles.haveAccount}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.LoginText}> {t('Login')}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Input;
