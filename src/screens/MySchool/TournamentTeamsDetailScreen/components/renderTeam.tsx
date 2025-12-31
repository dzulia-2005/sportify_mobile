import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/index.style';
import { RenderTeamProps } from '../types/index.type';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EditTeamModal from './editTeamsModal';

const RenderTeam: React.FC<RenderTeamProps> = ({ item }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <TouchableOpacity style={styles.teamCardContainer} activeOpacity={0.7}>
      <View style={styles.teamLogoWrapper}>
        <Image source={{ uri: item.logoUrl }} style={styles.teamLogoImage} />
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={styles.editButton}
          activeOpacity={0.8}
          onPress={() => setIsOpenModal(true)}
        >
          <Feather name="edit-2" color="#fff" size={14} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.removeButton} activeOpacity={0.8}>
          <AntDesign name="close" color="#fff" size={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.teamDetailsSection}>
        <Text style={styles.teamTitleText} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
      {isOpenModal && (
        <EditTeamModal
          visible={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </TouchableOpacity>
  );
};

export default RenderTeam;
