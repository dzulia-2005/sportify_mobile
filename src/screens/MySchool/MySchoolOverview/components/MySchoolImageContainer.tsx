import React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../styles/MainStyle';
import { SchoolProp } from '../types/index.type';

const MySchoolImageContainer: React.FC<SchoolProp> = ({ school }) => {
  const imageSource = school?.logoUrl
    ? { uri: school.logoUrl }
    : require('../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png');

  return (
    <View style={styles.ImageMainContainer}>
      <View style={styles.ImageContainer}>
        <Image style={styles.image} resizeMode="cover" source={imageSource} />
      </View>
    </View>
  );
};

export default MySchoolImageContainer;
