/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View, Linking } from 'react-native';
import { styles } from '../styles/LoginStyles';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from './schema';
import { useLoginMutation } from '../../../../feature/auth/login/model/useLoginMutation';
import { useDispatch } from 'react-redux';
import { setTokens } from '../../../../feature/auth/slices/authSlice';
import { SignInSuccess } from '../utils/signInSuccess';
import { LoginType, NavigationProp } from '../types/login.type';
import { LoginInitialValues } from '../utils/loginInitialValues';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import GoogleButton from './googleButton';
import { useI18n } from '../../../../shared/lib/i18n/I18nProvider';

const getParam = (url: string, key: string) => {
  const qIndex = url.indexOf('?');
  if (qIndex === -1) return null;

  const query = url.slice(qIndex + 1);
  const parts = query.split('&');

  for (const p of parts) {
    const [k, v] = p.split('=');
    if (decodeURIComponent(k) === key) {
      return decodeURIComponent(v ?? '');
    }
  }

  return null;
};

const Inputs: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { mutate: Login, isPending } = useLoginMutation();
  const dispatch = useDispatch();
  const { t } = useI18n();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<LoginType>({
    defaultValues: LoginInitialValues,
    resolver: zodResolver(LoginSchema),
  });

  const completeLogin = async ({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) => {
    dispatch(setTokens({ accessToken, refreshToken }));
    await SignInSuccess({ accessToken, refreshToken });
    navigation.navigate('Home');
  };

  const handleLogin = (loginValues: LoginType) => {
    Login(loginValues, {
      onSuccess: async res => {
        const { accessToken, refreshToken } = res;
        await completeLogin({ accessToken, refreshToken });
        reset();
      },
      onError: (err: unknown) => {
        console.log(err, 'this is error');
        showErrorToast(err);
      },
    });
  };

  useEffect(() => {
    const handleDeepLink = async (url: string) => {
      if (!url.startsWith('sportify://oauth-success')) return;

      const error = getParam(url, 'error');
      if (error) {
        showErrorToast(error);
        return;
      }

      const accessToken = getParam(url, 'token');
      const refreshToken = getParam(url, 'refreshToken');

      if (!accessToken || !refreshToken) {
        showErrorToast('Google login failed');
        return;
      }

      try {
        await completeLogin({ accessToken, refreshToken });
      } catch (err) {
        console.log('Deep link login error:', err);
        showErrorToast('Failed to complete Google login');
      }
    };

    const subscription = Linking.addEventListener('url', ({ url }) => {
      handleDeepLink(url);
    });

    Linking.getInitialURL().then(url => {
      if (url) {
        handleDeepLink(url);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <>
      <Controller
        name="userName"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholder={t('userName')}
            placeholderTextColor="#a0aec0"
            autoCapitalize="none"
          />
        )}
      />
      {errors.userName && (
        <Text style={styles.errorText}>{t(errors.userName.message)}</Text>
      )}

      <Controller
        name="password"
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholder={t('password')}
            placeholderTextColor="#a0aec0"
            secureTextEntry
            autoCapitalize="none"
          />
        )}
      />
      {errors.password && (
        <Text style={styles.errorText}>{t(errors.password.message)}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleLogin)}
        disabled={isPending}
      >
        <Text style={styles.buttonText}>
          {isPending ? t('Logging...') : t('Login')}
        </Text>
      </TouchableOpacity>

      <GoogleButton onGoogleSuccess={completeLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')}>
        <Text style={styles.forgot}>{t('Forgot your password?')}</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>{t("Don't have an account?")}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}> {t('Registration')}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Inputs;
