import React from 'react'
import { View } from 'react-native'
import { styles } from '../styles/index.style'
import FullName from '../components/FullName'
import Email from '../components/Email'
import Role from '../components/Role'
import Subscription from '../components/Subscription'

const MyAccount:React.FC = () => {
  return (
    <View style={styles.container}>
        <View style={styles.InfoContainer}>
           <FullName/>
           <Email/>
           <Role/>
           <Subscription/>
        </View>
    </View>
  )
}

export default MyAccount