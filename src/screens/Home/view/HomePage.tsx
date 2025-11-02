import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Cards from '../components/Cards';
import {styles} from "../styles/homePageContainerStyles";
import HowToItWorkCards from '../components/HowToItWorkCards';
import TestimonialCard from '../components/TestimonialCard';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Cards/>
      <HowToItWorkCards/>
      <TestimonialCard/>
      <Footer/>
    </ScrollView>
  );
};


export default HomePage;
