import React, { useState } from "react";
import { View } from "react-native";
import {styles} from "../styles/LoginStyles";
import Header from "../components/Header";
import Inputs from "../components/Inputs";
import Footer from "../components/Footer";


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View style={styles.container}>
      <Header/>
      <Inputs 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <Footer
         email={email}
         password={password}
      />
    </View>
  );
};

export default LoginScreen;
