import { StackNavigationProp } from '@react-navigation/stack';
import { Dispatch, SetStateAction } from 'react';
import { MySchoolStackParamList } from '../../../../app/navigation/mySchoolStackNavigator/mySchoolStackNavigator.types';

export type Props = {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
};

export type NavigationProp = StackNavigationProp<MySchoolStackParamList>;
