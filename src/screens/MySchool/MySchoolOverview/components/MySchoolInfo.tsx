import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/MainStyle';
import AddSchoolModal from './CreateMySchoolModal';
import { SchoolProp } from '../types/index.type';
import { useDeleteMySchoolMutation } from '../../../../feature/school/mySchool/delete/model/useDeleteMySchoolMutation';
import { useQueryClient } from '@tanstack/react-query';
import EditSchoolModal from './EditMySchoolModal';

const MySchoolInfo: React.FC<SchoolProp> = ({ school, refetch }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  const { mutate: deleteSchool, isPending } = useDeleteMySchoolMutation();
  const queryClient = useQueryClient();

  const handleDelete = (id: string) => {
    deleteSchool(id, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ['get-mySchool'],
        });

        queryClient.setQueryData(['get-mySchool'], null);

        if (refetch) {
          await refetch();
        } else {
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
    <View style={styles.infoWrapper}>
      <View style={styles.infoCard}>
        {school && school.id ? (
          <>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>My School</Text>
            </View>

            <Text style={styles.schoolName}>{school?.name}</Text>


            <View style={styles.actionGroup}>
              <TouchableOpacity
                onPress={() => setIsOpenEditModal(true)}
                style={[styles.actionButton, styles.primaryButton]}
                activeOpacity={0.85}
              >
                <Text style={styles.actionButtonText}>Update School</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleDelete(school.id!)}
                disabled={isPending}
                style={[styles.actionButton, styles.dangerButton]}
                activeOpacity={0.85}
              >
                {isPending ? (
                  <View style={styles.loadingRow}>
                    <ActivityIndicator size="small" color="#fff" />
                    <Text style={styles.actionButtonText}> Deleting...</Text>
                  </View>
                ) : (
                  <Text style={styles.actionButtonText}>Delete School</Text>
                )}
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.emptyTitle}>No school found</Text>
            <Text style={styles.emptyDescription}>
              Create your school profile to manage information easily.
            </Text>

            <TouchableOpacity
              onPress={() => setIsOpenModal(true)}
              style={[styles.actionButton, styles.successButton]}
              activeOpacity={0.85}
            >
              <Text style={styles.actionButtonText}>Create School +</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

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