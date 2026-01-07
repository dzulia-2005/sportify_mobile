import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/MainStyle';
import AddSchoolModal from './CreateMySchoolModal';
import { SchoolProp } from '../types/index.type';

const MySchoolInfo: React.FC<SchoolProp> = ({ school }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <View style={styles.InfoContainer}>
      <Text style={styles.schoolName}>{school?.name || 'school name'}</Text>

      <TouchableOpacity
        onPress={() => setIsOpenModal(true)}
        style={styles.AddSchoolBtn}
      >
        <Text style={styles.AddSchoolBtnTitle}>Create School +</Text>
      </TouchableOpacity>

      {isOpenModal && (
        <AddSchoolModal
          visible={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </View>
  );
};

export default MySchoolInfo;
