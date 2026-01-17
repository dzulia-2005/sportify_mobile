import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/MainStyle';
import AddSchoolModal from './CreateMySchoolModal';
import { SchoolProp } from '../types/index.type';
import { useDeleteMySchoolMutation } from '../../../../feature/mySchool/delete/model/useDeleteMySchoolMutation';
import { useQueryClient } from '@tanstack/react-query';
import EditSchoolModal from './EditMySchoolModal';

const MySchoolInfo: React.FC<SchoolProp> = ({ school, refetch }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const { mutate: deleteSchool, isPending } = useDeleteMySchoolMutation();
  const queryClient = useQueryClient();

  const handleDelete = async (id: string) => {
    deleteSchool(id, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['get-mySchool'],
        });

        queryClient.setQueryData(['get-mySchool'], null);

        if (refetch) {
          console.log('Calling refetch prop');
          await refetch();
        } else {
          console.log('Manually refetching');
          await queryClient.refetchQueries({
            queryKey: ['get-mySchool'],
          });
        }
      },
      onError: error => {
        console.error('Delete error:', error);
      },
    });
  };

  return (
    <View style={styles.InfoContainer}>
      <Text style={styles.schoolName}>{school?.name || 'No school found'}</Text>

      {school && school.id ? (
        <>
          <TouchableOpacity
            onPress={() => setIsOpenModal(true)}
            style={[styles.BaseBtn, styles.AddSchoolBtn]}
          >
            <Text style={styles.BtnTitle}>Create School +</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsOpenEditModal(true)}
            style={[styles.BaseBtn, styles.EditSchoolBtn]}
          >
            <Text style={styles.BtnTitle}>Update School</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleDelete(school.id!)}
            disabled={isPending}
            style={[styles.BaseBtn, styles.DeleteSchoolBtn]}
          >
            {isPending ? (
              <Text style={styles.BtnTitle}>Deleting...</Text>
            ) : (
              <Text style={styles.BtnTitle}>Delete School</Text>
            )}
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => setIsOpenModal(true)}
          style={[styles.BaseBtn, styles.AddSchoolBtn]}
        >
          <Text style={styles.BtnTitle}>Create School +</Text>
        </TouchableOpacity>
      )}

      {isOpenModal && (
        <AddSchoolModal
          visible={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
      {isOpenEditModal && (
        <EditSchoolModal
          visible={isOpenEditModal}
          onClose={() => setIsOpenEditModal(false)}
        />
      )}
    </View>
  );
};

export default MySchoolInfo;
