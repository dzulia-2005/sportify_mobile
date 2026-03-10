import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import EmptyImage from "../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png";

interface TeamInfoProps {
  logo: string;
  name: string;
  isWinner?: boolean;
  isFinal?: boolean;
}

const TeamInfo: React.FC<TeamInfoProps> = ({
  logo,
  name,
  isWinner = false,
  isFinal = false,
}) => (
  <View style={[styles.teamInfoContainer, isWinner && styles.winnerContainer]}>
    <View style={styles.logoContainer}>
      <Image 
        source={logo ? { uri: logo } : EmptyImage} 
        style={styles.teamLogo} 
      />
      {isWinner && (
        <View style={styles.winnerBadge}>
          <Text style={styles.winnerCheck}>✓</Text>
        </View>
      )}
    </View>
    <Text
      style={[
        styles.teamName,
        isWinner && styles.winnerText,
        isFinal && styles.finalText,
      ]}
    >
      {name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  teamInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    borderRadius: 8,
  },
  winnerContainer: {
    backgroundColor: '#4ade8019',
    borderWidth: 1,
    borderColor: '#4ade8050',
  },
  logoContainer: {
    position: 'relative',
  },
  teamLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
  winnerBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#4ade80',
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winnerCheck: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  teamName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  winnerText: {
    color: '#4ade80',
  },
  finalText: {
    color: '#fef3c7',
  },
});

export default TeamInfo;
