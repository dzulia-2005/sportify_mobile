import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/teams.styles'
import AddTeamModal from './AddTeamModal/addTeamModal';
import { HeaderProp } from '../types/teams.type';



const Header:React.FC<HeaderProp> = ({
  tournamentId
}) => {
  const [isOpenModal,setIsOpenModal]=useState(false);
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>Tournament Name</Text>
        <TouchableOpacity 
          style={styles.addTeamBtn}
          onPress={()=>setIsOpenModal(true)}
        >
          <Text style={styles.btnText}>+ Add Team</Text>
        </TouchableOpacity>
        {
          isOpenModal && (
            <AddTeamModal
              onClose={()=>setIsOpenModal(false)}
              visible={isOpenModal}
              tournamentId={tournamentId}
            />
          )
        }
    </View>
  )
}

export default Header