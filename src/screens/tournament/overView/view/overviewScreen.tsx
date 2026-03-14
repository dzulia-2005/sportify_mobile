import React from 'react'
import { Image, View } from 'react-native'
import imageSource from "../../../../shared/assets/images/DefaultLogoSchool.png"
import { styles } from '../styles/overview.styles';
import CardContainer from '../components/cardContainer';
import TournamentTimeLineContainer from '../components/tournamentTimeLineContainer';
import { RouteProp } from '@react-navigation/native';
import { TournamentTabNavigatorType } from '../../../../app/navigation/tabs/tournament/tournamentTabsNavigator/tournamenTabNavigator.type';
import { useGetByIdQuery } from '../../../../feature/tournament/tournament/model/getById/useGetByIdQuery';

type overViewProp = {
  route:RouteProp<TournamentTabNavigatorType,'overView'>
}

const OverviewScreen:React.FC<overViewProp> = ({
  route
}) => {
  const {tournamentId} = route.params;
  const {data:tournament} = useGetByIdQuery(tournamentId);

  return (
    <View style={styles.overviewContainer}>
        <View style={styles.header}>
          <Image 
            style={styles.image} 
            resizeMode="cover" 
            source={imageSource} 
          />

            <CardContainer
              tournament={tournament}
            />
            <TournamentTimeLineContainer/>
        </View>
    </View>
  )
}

export default OverviewScreen;