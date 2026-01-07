import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from '../styles/MainStyles';
import EditSchoolTeamModal from './EditSchoolTeamModal';
import { TeamDetailProp } from '../types/index.type';

const TeamInfoContainer: React.FC<TeamDetailProp> = ({ TeamDetail }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <View style={styles.TeamInfoMainContainer}>
      <View style={styles.TeamDetailInfo}>
        <Text style={styles.TeamInfoTitle}>{TeamDetail?.name}</Text>
        <Text style={styles.TeamInfoPlayersCount}>
          {' '}
          Team Players: {TeamDetail?.players.length}
        </Text>

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
