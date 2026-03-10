import React from 'react';
import { Text, View } from 'react-native';
import {styles} from "../styles/HowToItWorkCards";

const HowToItWorkCards = () => {
  return (
    <View style={styles.CardContainer}>
        
          <View>
            <Text style={styles.header}>
                How It Works
            </Text>
          </View>

          <View style={styles.card}>
            <View style={styles.circle}>
                <Text style={styles.number}>1</Text>
            </View>
            <Text style={styles.label}>Create Tournament</Text>
          </View>
    
          <View style={styles.card}>
            <View style={styles.circle}>
                <Text style={styles.number}>2</Text>
            </View>
            <Text style={styles.label}>Invite Teams</Text>
          </View>
    
          <View style={styles.card}>
            <View style={styles.circle}>
                <Text style={styles.number}>3</Text>
            </View>
            <Text style={styles.label}>Track Scores</Text>
          </View>

          <View style={styles.card}>
             <View style={styles.circle}>
                <Text style={styles.number}>4</Text>
            </View>
            <Text style={styles.label}>Celebrate Winners</Text>
          </View>

    </View>
)
}



export default HowToItWorkCards