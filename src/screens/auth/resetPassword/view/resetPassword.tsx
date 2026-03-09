import React from 'react'
import { View,Text, StatusBar, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { useResetPasswordMutation } from '../../../../feature/auth/resetPassword/model/useResetPasswordMutation';

const ResetPassword = () => {
    const {} = useResetPasswordMutation();

  return (
    <View style={styles.forgotPassContainer}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.title}>Sportify</Text>
          <Text style={styles.subtitle}>Change your password</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#a0aec0"
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              {/* {isPending ? 'Sending...' : 'Send Reset Link'} */}
            </Text>
          </TouchableOpacity>
        </View>
  )
}

export default ResetPassword;

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
})