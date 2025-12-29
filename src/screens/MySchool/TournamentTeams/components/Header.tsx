import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/mainStyles';

const Header: React.FC = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderTitle}>Tournaments Teams</Text>
      <TouchableOpacity
        style={{ backgroundColor: '#4CAF50', padding: 10, borderRadius: 10 }}
      >
        <Text style={{ color: '#fff', fontSize: 14 }}>Add Tournament +</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
