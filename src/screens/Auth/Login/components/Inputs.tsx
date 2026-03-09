import React, { useEffect } from 'react';
import { Linking, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
import { getParam } from '../utils/getParam';


const Inputs: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { mutate: Login, isPending } = useLoginMutation();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: LoginInitialValues,
    resolver: zodResolver(LoginSchema),
  });
  const dispatch = useDispatch();

  const handleLogin = (loginValues: LoginType) => {
    Login(loginValues, {
      onSuccess: res => {
        const { accessToken, refreshToken } = res;
        dispatch(setTokens({ accessToken, refreshToken }));
        SignInSuccess(res);
        navigation.navigate('Home');
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
        dispatch(setTokens({ accessToken, refreshToken }));

        await SignInSuccess({
          accessToken,
          refreshToken,
        });

        navigation.navigate('Home');
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
  }, [dispatch, navigation]);

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
            placeholder="userName"
            placeholderTextColor="#a0aec0"
          />
        )}
      />
      {errors.userName && (
        <Text style={styles.errorText}>{errors.userName?.message}</Text>
      )}

      <Controller
        name="password"
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholder="password"
            placeholderTextColor="#a0aec0"
            secureTextEntry
          />
        )}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password?.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleLogin)}
        disabled={isPending}
      >
        {isPending ? (
          <Text style={styles.buttonText}>Logging...</Text>
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>

      <GoogleButton/>

      <TouchableOpacity
      >
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}> Registration</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Inputs;
