import React from 'react'
import { View } from 'react-native'
import {styles} from "../styles/RegisterStyles";
import Header from '../components/Header';
import Input from '../components/Input';
import Footer from '../components/Footer';


const Register:React.FC = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Input/>
      <Footer/>
    </View>
  )
}


export default Register