import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Cards from '../components/Cards';

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Cards/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F24',
  },
  subText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 6,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    color: '#00c951',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default HomePage;
