import React from 'react'
import { Image, View } from 'react-native'
import { styles } from '../styles/MainStyles'

const ImgContainer = () => {
  return (
     <View style={styles.ImgMainContainer}>
              <View style={styles.ImgContainer}>
                <Image 
                  style={styles.Img}
                  source={require('../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png')}
                  resizeMode='cover'
                  />
              </View>
            </View>
  )
}

export default ImgContainer