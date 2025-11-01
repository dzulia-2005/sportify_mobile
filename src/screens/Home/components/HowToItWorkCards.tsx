import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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

const styles = StyleSheet.create({
  header:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold',

  },
  CardContainer: {
    flexDirection: 'column',          
    justifyContent: 'space-around',
    gap:50,
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
    backgroundColor: '#0A0F24',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#1e293b',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 12,
    width: 300,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  number: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  circle:{
    height: 50,
    width: 50,
    backgroundColor: '#3b82f6',
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:8
  },
  label: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    fontWeight:'bold'
  },
});

export default HowToItWorkCards