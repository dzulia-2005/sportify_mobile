import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Cards from '../components/Cards';
import {styles} from "../styles/homePageContainerStyles";
import HowToItWorkCards from '../components/HowToItWorkCards';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Cards/>
      <HowToItWorkCards/>
      <TestimonialCard/>
    </ScrollView>
  );
};


export default HomePage;
