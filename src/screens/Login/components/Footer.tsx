import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/LoginStyles';
import { Props } from '../types/Footer.type';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/navigation.type';

const Footer: React.FC<Props> = ({ email, password }) => {
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('გთხოვ შეავსე ყველა ველი!');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    Alert.alert('შესვლა შესრულდა წარმატებით!');
  };

  const navigation = useNavigation<NavigationProp>();

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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

export default Footer;
