import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/mainStyles';
import { Props } from '../types/index.type';
import AddMySchoolPlayerModal from './AddMySchoolPlayerModal';

const SearchComponent: React.FC<Props> = ({ setSearch, search }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <TouchableOpacity
        style={styles.AddPlayerBtnContainer}
        onPress={() => setOpenModal(true)}
      >
        <Text style={styles.AddPlayerBtnText}>Add Player +</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Player search..."
        placeholderTextColor="#808ea3"
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
      />
      {openModal && (
        <AddMySchoolPlayerModal
          visible={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default SearchComponent;
