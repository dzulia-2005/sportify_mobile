import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useForgotPasswordMutation } from '../../../../feature/auth/forgotPassword/model/useForgotPassword';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import { useNavigation } from '@react-navigation/native';
import { ForgotPasswordNavigationProp } from '../types/index.type';


const ForgotPassword:React.FC = () => {
  const {mutate:forgotPassword,isPending} = useForgotPasswordMutation();
  const [email,setEmail] = useState("");
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  const handleForgotPassword = () => {
    if(!email.trim()){
      showErrorToast("please enter your email");
      return;
    }
    forgotPassword({email},{
      onSuccess:() => {
        navigation.navigate("resetPassword");
      },
      onError:() => {
        showErrorToast("Failed to send reset link. Please try again.")
      }
    })
  }

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
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleForgotPassword}
        disabled={isPending}
      >
        <Text style={styles.buttonText}>
          {isPending ? 'Sending...' : 'Send Reset Link'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ForgotPassword;

const styles = StyleSheet.create({
  forgotPassContainer : {
    flex:1,
    backgroundColor:'#0b1b33',
    alignItems:'center',
    justifyContent:'center',
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
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});