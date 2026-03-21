import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Footer from '../components/footer';
import Contact from '../components/contact';
import Features from '../components/features';
import AboutSection from '../components/aboutSection';
import { styles } from '../styles/aboutUs.style';
import Header from '../components/header';

const AboutUs: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header />
        <AboutSection />
        <Features />
        <Contact />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;
