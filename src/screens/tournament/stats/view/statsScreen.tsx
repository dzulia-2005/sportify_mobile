import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { styles } from '../styles/stats.style';
import TabWrapper from '../components/tabWrapper';
import Card from '../components/card';
import { useGetTopScorerQuery } from '../../../../feature/tournament/player/model/GetTopScorer/useGetTopScorerQuery';
import { useRoute } from '@react-navigation/native';
import { TeamsRouteProp } from '../../teams/types/teams.type';
import { useGetBestPlayerQuery } from '../../../../feature/tournament/player/model/getBestPlayer/useGetBestPlayerQuery';


const StatsScreen: React.FC = () => {
  const route = useRoute<TeamsRouteProp>();
  const {tournamentId} = route.params;

  const {data:scorers = []} = useGetTopScorerQuery(tournamentId);
  const {data:bestPlayers = []} = useGetBestPlayerQuery(tournamentId);

  const [activeTab, setActiveTab] = useState<'topScorers' | 'bestPlayers'>('topScorers');
  const data = activeTab === 'topScorers' ? scorers : bestPlayers;
  const title = activeTab === 'topScorers' ? 'Top Scorers' : 'Best Players';
  const label = activeTab === 'topScorers' ? 'Goal' : 'Assist';

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.content}>
        <TabWrapper
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{title}</Text>
          <FlatList
            data={data}
            ListEmptyComponent={
              <View>
                <Text style={{color:'#767474'}}>Not Found Stat</Text>
              </View>
            }
            renderItem={({item,index})=>(
              <Card
                item={item}
                label={label}
                index={index}
                value={activeTab === 'topScorers' ? item.goals : item.assists}
                isLastIndex={index===data.length - 1}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StatsScreen;

