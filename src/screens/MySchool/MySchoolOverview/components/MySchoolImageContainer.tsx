import React from 'react'
import { Image, View } from 'react-native'
import { styles } from '../styles/MainStyle'

const MySchoolImageContainer = () => {
  return (
        <View style={styles.ImageMainContainer}>
           <View style={styles.ImageContainer}>
             <Image
               style={styles.image}
               resizeMode='cover'
               source={require('../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png')}
             />
           </View>
        </View>
  )
}

export default MySchoolImageContainer;