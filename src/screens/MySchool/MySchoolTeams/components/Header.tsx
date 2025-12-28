import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/mainStyles';
import AddTeamModal from './AddTeamModal';

const Header: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderTitle}>MySchool Teams</Text>
      <TouchableOpacity
        style={styles.HeaderBtnContainer}
        onPress={() => setIsOpenModal(true)}
      >
        <Text style={styles.HeaderBtnTitle}>Add Team +</Text>
      </TouchableOpacity>
      {isOpenModal && (
        <AddTeamModal
          visible={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </View>
  );
};

export default Header;
