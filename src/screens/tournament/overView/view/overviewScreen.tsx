import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import imageSource from "../../../../shared/assets/images/DefaultLogoSchool.png"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OverviewScreen:React.FC = () => {
  return (
    <View style={styles.overviewContainer}>
        <View style={styles.header}>
          <Image 
            style={styles.image} 
            resizeMode="cover" 
            source={imageSource} 
          />

          <View style={styles.headerCardContainer}>

            <View style={styles.headerCard}>
              <View style={styles.headerCardTitleContainer}>
                <Icon name='earth' size={17} color='#7c828f'/>
                <Text style={styles.headerCardText}>Status</Text>
              </View>
              <View style={styles.headerCardBottomContainer}>
                <Text style={styles.headerCardBottomContainerInnerText}>hello</Text>
              </View>
            </View>

            <View style={styles.headerCard}>
               <View style={styles.headerCardTitleContainer}>
                <Icon name='account-multiple-outline' size={17} color='#7c828f'/>
                <Text style={styles.headerCardText}>Teams</Text>
              </View>
              <View style={styles.headerCardBottomContainer}>
                <Text style={styles.headerCardBottomContainerInnerText}>hello</Text>
              </View>
            </View>

            <View style={styles.headerCard}>
              <View style={styles.headerCardTitleContainer}>
                <Icon name='map-marker' size={17} color='#7c828f'/>
                <Text style={styles.headerCardText}>location</Text>
              </View>
              <View style={styles.headerCardBottomContainer}>
                <Text style={styles.headerCardBottomContainerInnerText}>hello</Text>
              </View>
            </View>

          </View>

            <View style={styles.tournamentTimeLineContainer}>
              <View style={styles.timeLineTextContainer}>
                <Icon name='clock-fast' size={20} color='#fff'/>
                <Text style={styles.timeLineText}>Tournament TimeLine</Text>
              </View>
              <View style={styles.timeRangeContainer}>
                <View>
                  <Text style={styles.timeRangeText}>Start Date</Text>
                  <Text style={styles.timeRangeText}>01/02/2025</Text>
                </View>
                <View>
                  <Text style={styles.timeRangeText}>End Date</Text>
                  <Text style={styles.timeRangeText}>01/02/2025</Text>
                </View>
              </View>
          </View>

        </View>
    </View>
  )
}

export default OverviewScreen;

const styles = StyleSheet.create({
  overviewContainer:{
    backgroundColor:'#0b1b33',
    flex:1
  },
  header:{
    flexDirection:'column',
    paddingVertical:30,
    alignItems:'center'
  },
  image:{
    width:150,
    height:150
  },
  headerCardContainer:{
    flexDirection:'column',
    gap:10,
    marginVertical:20,
    backgroundColor:'#122240',
    padding:20,
    borderRadius:10
  },

  headerCard:{
    width:200,
    height:60,
    borderColor:'#233554',
    backgroundColor:'#233554',
    borderRadius:10,
    color:'#fff',
    padding:10
  },
  headerCardText:{
    color:'#7c828f',
    fontWeight:'bold',
    textAlign:'center'
  },
  headerCardTitleContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:5
  },
  headerCardBottomContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  headerCardBottomContainerInnerText:{
    color:'#fff',
    fontWeight:'bold'
  },
  tournamentTimeLineContainer:{
    backgroundColor:'#122240',
    gap:10,
    height:110,
    width:240,
    borderRadius:10
  },
  timeLineTextContainer:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center',
    gap:5
  },
  timeLineText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
    paddingVertical:10
  },
  timeRangeContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:20,
    paddingTop:10
  },
  timeRangeText:{
    color:'#fff',
    fontWeight:'bold'
  },
})