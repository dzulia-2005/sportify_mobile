import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'


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

const styles = StyleSheet.create({
  header: {
    height: 280,
    justifyContent: 'flex-start', 
    paddingTop: 30,
    overflow:'hidden'
  },
  imageZoom:{
    transform: [{ scale: 2.2 }]
  },
  overlay: {
    padding: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  headerText: {
    color: '#00c951',
    fontSize: 28,
    fontWeight: 'bold',
  },
  darkOverlay:{
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  bottomTextContainer: {
    alignItems: 'center',
    marginTop:20
  },
  bottomTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  bottomSubtitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
    width: 260,
    lineHeight: 16,
  },
})

export default Header