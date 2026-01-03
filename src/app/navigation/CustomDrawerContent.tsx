import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { logout } from '../../feature/auth/slices/authActions';
import { useAppDispatch } from '../store/hooks/hook';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../screens/Auth/Login/types/login.type';

const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.bottomSection}>
        <DrawerItem
          label="LogOut"
          labelStyle={styles.logoutLabel}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 10,
    marginBottom: 20,
  },
  logoutLabel: {
    color: '#fff',
    backgroundColor: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 10,
    textAlign: 'center',
    paddingVertical: 5,
  },
});

export default CustomDrawerContent;
