import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { styles } from '../styles/mainStyles'
import { Props } from '../types/index.type'


const SearchComponent:React.FC<Props> = ({setSearch,search}) => {
  return (
   <>
     
      <View style={styles.AddPlayerBtnContainer}>
        <Text style={styles.AddPlayerBtnText}>Add Player +</Text>
      </View>
     
     <TextInput
        placeholder="მოთამაშის ძიება..."
        placeholderTextColor="#808ea3"
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
      />
   </>
  )
}

export default SearchComponent