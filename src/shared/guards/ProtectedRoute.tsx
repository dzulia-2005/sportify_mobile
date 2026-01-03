import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { NavigationProp } from '../../screens/Auth/Login/types/login.type';

const ProtectedScreen = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }
  }, [isLoggedIn, navigation]);

  if (!isLoggedIn) return null;

  return <>{children}</>;
};

export default ProtectedScreen;
