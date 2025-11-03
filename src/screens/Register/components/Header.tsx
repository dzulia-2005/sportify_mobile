import React from 'react';
import { StatusBar, Text } from 'react-native'
import {styles} from "../styles/RegisterStyles";

const Header:React.FC = () => {
  return (
    <>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>SportZone</Text>
        <Text style={styles.subtitle}>ანგარიშის შექმნა</Text>
    </>
  )
}

export default Header