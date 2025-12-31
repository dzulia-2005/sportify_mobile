import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/MainStyles';
import { Text, TouchableOpacity, View } from 'react-native';
import AddPlayerModal from './AddPlayerModal';

const TeamTableHeader = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <View style={styles.playerContainer}>
      <Text style={styles.playerTitle}>Players</Text>
      <TouchableOpacity
        onPress={() => setIsOpenModal(true)}
        style={styles.AddBtnContainer}
      >
        <Text style={styles.AddPlayerBtn}>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            color="#fff"
            size={20}
          />{' '}
          Add
        </Text>
      </TouchableOpacity>
      {isOpenModal && (
        <AddPlayerModal
          visible={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </View>
  );
};

export default TeamTableHeader;
