import React from 'react';
import { Text, View } from 'react-native';
import {styles} from "../styles/CardsStyles";

const Cards = () => {
  return (
    <View style={styles.CardContainer}>
      <View style={styles.card}>
        <Text style={styles.number}>150+</Text>
        <Text style={styles.label}>Active Tournaments</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.number}>2k+</Text>
        <Text style={styles.label}>Teams Participating</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.number}>10k+</Text>
        <Text style={styles.label}>Matches Tracked</Text>
      </View>
    </View>
  );
};


export default Cards;
