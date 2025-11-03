import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {styles} from "../styles/HeaderStyles";

const Header:React.FC = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch({
      type: 'OPEN_DRAWER'
    });
  };

  return (
     <ImageBackground
            source={require('../../../assets/images/sport.jpg')}
            style={styles.header}
            resizeMode="cover"
            imageStyle={styles.imageZoom}
          >
            <View style={styles.darkOverlay}/>
    
            <View style={styles.overlay}>
              <Text style={styles.headerText}>SportZone</Text>
              <TouchableOpacity onPress={openDrawer}>
                <Icon name="menu" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
    
            <View style={styles.bottomTextContainer}>
              <Text style={styles.bottomTitle}>Manage Your Tournament Online</Text>
              <Text style={styles.bottomSubtitle}>
                Create, organize, and track 
                tournaments easily in one place.
              </Text>
            </View>
      </ImageBackground>
  )
}

export default Header