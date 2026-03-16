import React from 'react'
import { Animated, Image, View } from 'react-native'
import imageSource from "../../../../shared/assets/images/DefaultLogoSchool.png"
import { styles } from '../styles/overview.styles';
import CardContainer from '../components/cardContainer';
import TournamentTimeLineContainer from '../components/tournamentTimeLineContainer';
import { useGetByIdQuery } from '../../../../feature/tournament/tournament/model/getById/useGetByIdQuery';
import { overViewProp } from '../types/overview.type';
import { useShimmerAnimation } from '../../../../shared/hooks/useShimmerAnimation';


const OverviewScreen:React.FC<overViewProp> = ({
  route
}) => {
  const {tournamentId} = route.params;
  const {data:tournament,isLoading} = useGetByIdQuery(tournamentId);
  const { translateX } = useShimmerAnimation(isLoading);

  return (
    <View style={styles.overviewContainer}>
        <View style={styles.header}>
          <View>
                  {isLoading ? (
                    <View style={styles.skeletonImageContainer}>
                      <Animated.View
                        style={[
                          styles.shimmer,
                          {
                            transform: [{ translateX }],
                          },
                        ]}
                      />
                    </View>
                  ) : (
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={imageSource}
                    />
                  )}
                </View>
            <CardContainer
              tournament={tournament}
            />
            <TournamentTimeLineContainer/>
        </View>
    </View>
  )
}

export default OverviewScreen;