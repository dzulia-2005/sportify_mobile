import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.divider} />

      <View style={styles.socials}>
        <Icon name="github" size={22} color="#3B82F6" />
        <Icon name="instagram" size={22} color="#3B82F6" />
        <Icon name="mail" size={22} color="#3B82F6" />
      </View>

      <Text style={styles.text}>© 2025 SportZone. All rights reserved.</Text>
      <Text style={styles.subText}>Built with  by Nikoloz Dzuliashvili</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0A0F24',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: '#1E293B',
    marginBottom: 15,
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 15,
  },
  icon: {
    color: '#3B82F6',
    fontSize: 22,
  },
  text: {
    color: '#94A3B8',
    fontSize: 13,
  },
  subText: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 4,
  },
});

export default Footer;
