import React from 'react';
import { View, Text, TouchableOpacity, Alert } from "react-native";
import {styles} from "../styles/LoginStyles";
import { Props } from '../types/Footer.type';



const Footer:React.FC<Props> = ({email,password}) => {

    const handleLogin = () => {
        if (!email || !password) {
          Alert.alert("გთხოვ შეავსე ყველა ველი!");
          return;
        }
        console.log("Email:", email);
        console.log("Password:", password);
          Alert.alert("შესვლა შესრულდა წარმატებით!");
    };

  return (
    <>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>შესვლა</Text>
              </TouchableOpacity>
        
              <TouchableOpacity>
                <Text style={styles.forgot}>დაგავიწყდა პაროლი?</Text>
              </TouchableOpacity>
        
              <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>არ გაქვს ანგარიში?</Text>
                <TouchableOpacity>
                  <Text style={styles.registerText}> რეგისტრაცია</Text>
                </TouchableOpacity>
              </View>
    </>
  )
}

export default Footer