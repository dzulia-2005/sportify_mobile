import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/stats.style'
import { TabWrapperProp } from '../types/stat.type'


const TabWrapper:React.FC<TabWrapperProp> = ({
    activeTab,
    setActiveTab
}) => {
  return (
    <View style={styles.tabWrapper}>
              <TouchableOpacity
                activeOpacity={0.85}
                style={[styles.tabButton, activeTab === 'topScorers' && styles.activeTabButton]}
                onPress={() => setActiveTab('topScorers')}
              >
                <Text style={[styles.tabText, activeTab === 'topScorers' && styles.activeTabText]}>
                  Top Scorers
                </Text>
              </TouchableOpacity>
    
              <TouchableOpacity
                activeOpacity={0.85}
                style={[styles.tabButton, activeTab === 'bestPlayers' && styles.activeTabButton]}
                onPress={() => setActiveTab('bestPlayers')}
              >
                <Text style={[styles.tabText, activeTab === 'bestPlayers' && styles.activeTabText]}>
                  Best Players
                </Text>
              </TouchableOpacity>
    </View>
  )
}

export default TabWrapper