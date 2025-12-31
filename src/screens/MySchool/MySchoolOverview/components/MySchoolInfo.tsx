import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/MainStyle';
import AddSchoolModal from './CreateMySchoolModal';

const MySchoolInfo = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <View style={styles.InfoContainer}>
      <Text style={styles.schoolName}>თბილისის სახელმწიფო სკოლა</Text>
      <Text style={styles.schoolFounded}>დაარსდა: 2008 წელი</Text>

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
