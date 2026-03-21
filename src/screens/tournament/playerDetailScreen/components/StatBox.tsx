import { Text, View } from 'react-native';
import { styles } from '../styles/playerDetailScreen.style';

const StatBox = ({ label, value }: { label: string; value: number }) => {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
};

export default StatBox;
