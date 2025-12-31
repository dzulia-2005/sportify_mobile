import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/LoginStyles';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerNavigationType } from '../../../../app/navigation/DrawerNavigator.type';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from './schema';
import { useLoginMutation } from '../../../../feature/auth/login/model/useLoginMutation';
import axios from 'axios';
import { Toast } from '@ant-design/react-native';

type NavigationProp = DrawerNavigationProp<DrawerNavigationType, 'Login'>;

type LoginType = {
  userName: string;
  password: string;
};

const LoginInitialValues: LoginType = {
  userName: '',
  password: '',
};

const Inputs: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { mutate: Login, isPending } = useLoginMutation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: LoginInitialValues,
    resolver: zodResolver(LoginSchema),
  });

  const handleLogin = (loginValues: LoginType) => {
    Login(loginValues, {
      onSuccess: () => {
        navigation.navigate('Home');
      },
      onError: err => {
        if (axios.isAxiosError(err)) {
          const status = err.response?.status;
          if (status === 400 || status === 401) {
            Toast.fail(
              'The username or password is incorrect. Please try again.',
            );
          } else {
            Toast.fail('An unexpected error occurred.');
          }
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

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Registration</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Inputs;
