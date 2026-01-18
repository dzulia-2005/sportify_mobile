import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerNavigationType } from '../../app/navigation/DrawerNavigator.type';

type NavigationProp = DrawerNavigationProp<DrawerNavigationType>;

type BackBtnTypes = {
  navigation: NavigationProp;
};

const BackButton: React.FC<BackBtnTypes> = ({ navigation }) => {
  const handleGoBackClick = () => {
    const parent = navigation.getParent();
    if (parent) {
      parent.navigate('Login');
    } else {
      navigation.navigate('Login' as never);
    }
  };
  return (
    <TouchableOpacity onPress={handleGoBackClick} style={{ marginLeft: 15 }}>
      <Ionicons name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default BackButton;
