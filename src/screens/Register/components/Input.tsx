import React from 'react';
import { styles } from '../styles/RegisterStyles';
import { Text, TouchableOpacity, TextInput, View } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerNavigationType } from '../../../app/navigation/DrawerNavigator.type';
import { useNavigation } from '@react-navigation/native';
import { useRegisterMutation } from '../../../feature/auth/register/model/useRegisterMutation';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from './register.schema';
import axios from 'axios';
import { Toast } from '@ant-design/react-native';

type NavigationProp = DrawerNavigationProp<DrawerNavigationType>;
type RegisterType = {
  userName: string;
  password: string;
  email: string;
};
const RegisterInitialValues: RegisterType = {
  userName: '',
  password: '',
  email: '',
};

const Input = () => {
  const navigation = useNavigation<NavigationProp>();
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
            Toast.fail('Invalid registration data. Please check your inputs.');
          } else if (status === 409) {
            Toast.fail('User already exists with this email or username.');
          } else {
            Toast.fail('An unexpected error occurred. Please try again.');
          }
        } else {
          Toast.fail('An unexpected error occurred. Please try again.');
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
            placeholder="Enter UserName"
            style={styles.input}
            placeholderTextColor="#a0aec0"
          />
        )}
      />
      {errors.userName && (
        <Text style={styles.errorText}>{errors.userName?.message}</Text>
      )}

      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Enter Email"
            style={styles.input}
            placeholderTextColor="#a0aec0"
          />
        )}
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email?.message}</Text>
      )}

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Enter Password"
            style={styles.input}
            placeholderTextColor="#a0aec0"
          />
        )}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password?.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleRegister)}
      >
        {isPending ? (
          <Text style={styles.buttonText}>Signing up...</Text>
        ) : (
          <Text style={styles.buttonText}>Sign up</Text>
        )}
      </TouchableOpacity>

      <View style={styles.haveAccount}>
        <Text style={styles.AccountText}>Have you Account?</Text>
        <TouchableOpacity
          style={styles.haveAccount}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.LoginText}> LogIn</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Input;
