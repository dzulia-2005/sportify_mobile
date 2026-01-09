import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from '../styles/MainStyles';
import EditSchoolTeamModal from './EditSchoolTeamModal';
import { TeamDetailProp, TeamDetailScreenProp } from '../types/index.type';
import { useDeleteMySchoolTeam } from '../../../../feature/mySchoolTeams/delete/model/useDeleteMySchoolTeam';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';

const TeamInfoContainer: React.FC<TeamDetailProp> = ({
  TeamDetail,
  teamId,
}) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { mutate: DeleteTeam, isPending } = useDeleteMySchoolTeam();
  const queryClient = useQueryClient();
  const navigation = useNavigation<TeamDetailScreenProp>();

  const handleDelete = (TeamId: string) => {
    DeleteTeam(TeamId, {
      onSuccess: () => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: 'MySchoolTabs',
                state: {
                  routes: [{ name: 'MySchoolTeams' }],
                },
              },
            ],
          }),
        );
        queryClient.invalidateQueries({ queryKey: ['getById'] });
      },
      onError: err => {
        showErrorToast(err);
      },
    });
  };

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
            onPress={() => handleDelete(teamId)}
            style={styles.DeleteBtnContainer}
            activeOpacity={0.8}
          >
            <AntDesign name="delete" color="#fff" size={18} />
            {isPending ? (
              <Text style={[styles.EditBtnTitle, { marginLeft: 6 }]}>
                Deleting...
              </Text>
            ) : (
              <Text style={[styles.EditBtnTitle, { marginLeft: 6 }]}>
                Delete
              </Text>
            )}
          </TouchableOpacity>
        </View>

        {isOpenModal && (
          <EditSchoolTeamModal
            teamId={teamId}
            visible={isOpenModal}
            onClose={() => setIsOpenModal(false)}
          />
        )}
      </View>
    </View>
  );
};

export default TeamInfoContainer;
