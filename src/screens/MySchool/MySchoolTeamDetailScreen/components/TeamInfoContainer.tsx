import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from '../styles/MainStyles';
import EditSchoolTeamModal from './EditSchoolTeamModal';

const TeamInfoContainer = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <View style={styles.TeamInfoMainContainer}>
      <View style={styles.TeamDetailInfo}>
        <Text style={styles.TeamInfoTitle}>U16 Team</Text>
        <Text style={styles.TeamInfoPlayersCount}>Team Players : 1 </Text>

        <View style={styles.ButtonsContainer}>
          <TouchableOpacity
            onPress={() => setIsOpenModal(true)}
            style={styles.EditBtnContainer}
          >
            <Text style={styles.EditBtnTitle}>
              Edit <Feather name="edit-3" color="#fff" size={20} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.DeleteBtnContainer}>
            <Text style={styles.EditBtnTitle}>
              Delete <AntDesign name="delete" color="#fff" size={20} />
            </Text>
          </TouchableOpacity>
        </View>
        {isOpenModal && (
          <EditSchoolTeamModal
            visible={isOpenModal}
            onClose={() => setIsOpenModal(false)}
          />
        )}
      </View>
    </View>
  );
};

export default TeamInfoContainer;
