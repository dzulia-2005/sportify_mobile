import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {styles} from "../styles/RegisterStyles";
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../types/index.type';


const Footer = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.haveAccount}>
            <Text style={styles.AccountText}>გააქვს ანგარიში?</Text>
            <TouchableOpacity 
              style={styles.haveAccount}
              onPress={()=>navigation.navigate("Login")}
              >
              <Text style={styles.LoginText}>   შესვლა</Text>
            </TouchableOpacity>
    </View>
  )
}

export default Footer