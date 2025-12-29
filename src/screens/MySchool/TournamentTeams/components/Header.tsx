import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/mainStyles';
import AddTournamentModal from './AddTournamentModal';

const Header: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderTitle}>Tournaments Teams</Text>
      <TouchableOpacity
        onPress={() => setIsOpenModal(true)}
        style={{ backgroundColor: '#4CAF50', padding: 10, borderRadius: 10 }}
      >
        <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>
          Add Tournament +
        </Text>
      </TouchableOpacity>
      {isOpenModal && (
        <AddTournamentModal
          visible={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </View>
  );
};

export default Header;
