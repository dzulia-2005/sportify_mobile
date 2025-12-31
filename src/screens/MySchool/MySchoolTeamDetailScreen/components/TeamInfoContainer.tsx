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
        {/* Team Header */}
        <Text style={styles.TeamInfoTitle}>U16 Team</Text>
        <Text style={styles.TeamInfoPlayersCount}>👥 Team Players: 1</Text>

        {/* Action Buttons */}
        <View style={styles.ButtonsContainer}>
          <TouchableOpacity
            onPress={() => setIsOpenModal(true)}
            style={styles.EditBtnContainer}
            activeOpacity={0.8}
          >
            <Feather name="edit-3" color="#fff" size={18} />
            <Text style={[styles.EditBtnTitle, { marginLeft: 6 }]}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={styles.DeleteBtnContainer}
            activeOpacity={0.8}
          >
            <AntDesign name="delete" color="#fff" size={18} />
            <Text style={[styles.EditBtnTitle, { marginLeft: 6 }]}>Delete</Text>
          </TouchableOpacity>
        </View>

        {/* Modal */}
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
