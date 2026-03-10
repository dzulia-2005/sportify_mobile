import React from 'react'
import { styles } from '../styles/index.style'
import { Text, TouchableOpacity } from 'react-native'

const AddTournamentButton:React.FC = () => {
  return (
    <TouchableOpacity style={styles.AddTournament}>
        <Text style={styles.AddTournamentText}>Add Tournament +</Text>
    </TouchableOpacity>
  )
}

export default AddTournamentButton