import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ArrowLeftProps } from './stackNavigator.type';

export const ArrowLeft = ({ onPress }: ArrowLeftProps) => (
  <Icon
    name="arrow-left"
    size={24}
    color="#fff"
    style={{ marginLeft: 15, paddingBottom: 105 }}
    onPress={onPress}
  />
);
