import React from 'react';
import {styles} from "../styles/RegisterStyles";
import { Text, TouchableOpacity, TextInput } from 'react-native'

const Input = () => {
  return (
    <>
        <TextInput 
            placeholder='შეიყვანეთ სახელი'
            style={styles.input}
            placeholderTextColor="#a0aec0"
          />
    
          <TextInput 
            placeholder='შეიყვანეთ მეილი'
            style={styles.input}
            placeholderTextColor="#a0aec0"
          />
    
          <TextInput 
            placeholder='შეიყვანეთ პაროლი'
            style={styles.input}
            placeholderTextColor="#a0aec0"
          />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>რეგისტრაცია</Text>
            </TouchableOpacity>
    </>
  )
}

export default Input