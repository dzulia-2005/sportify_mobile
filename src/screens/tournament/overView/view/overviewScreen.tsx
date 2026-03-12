import React from 'react'
import { Image, View } from 'react-native'
import imageSource from "../../../../shared/assets/images/DefaultLogoSchool.png"
import { styles } from '../styles/overview.styles';
import CardContainer from '../components/cardContainer';
import TournamentTimeLineContainer from '../components/tournamentTimeLineContainer';

const OverviewScreen:React.FC = () => {
  return (
    <View style={styles.overviewContainer}>
        <View style={styles.header}>
          <Image 
            style={styles.image} 
            resizeMode="cover" 
            source={imageSource} 
          />

            <CardContainer/>
            <TournamentTimeLineContainer/>
        </View>
    </View>
  )
}

export default OverviewScreen;