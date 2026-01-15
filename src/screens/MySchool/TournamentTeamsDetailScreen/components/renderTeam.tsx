import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/index.style';
import { RenderTeamProps } from '../types/index.type';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EditTeamModal from './editTeamsModal';
import { useDeleteTournamentTeamsMutation } from '../../../../feature/mySchoolTournamentTeams/delete/model/useDeleteTournamentTeamsMutation';
import { useQueryClient } from '@tanstack/react-query';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';

const RenderTeam: React.FC<RenderTeamProps> = ({
  item,
  isLoading,
  id,
  refetch,
}) => {
  const queryClient = useQueryClient();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { mutate: deleteTeam } = useDeleteTournamentTeamsMutation();
  const imageSource = item.logoUrl
    ? { uri: item.logoUrl }
    : require('../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png');

  const handleDelete = (Id: string) => {
    deleteTeam(Id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['getMySchoolAllTournaments'],
        });
      },
      onError: err => {
        showErrorToast(err);
      },
    });
  };

  useEffect(() => {
    refetch();
  });

  const shimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shimmerAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(shimmerAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else {
      shimmerAnimation.stopAnimation();
      shimmerAnimation.setValue(0);
    }
  }, [isLoading, shimmerAnimation]);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 100],
  });

  return (
    <TouchableOpacity style={styles.teamCardContainer} activeOpacity={0.7}>
      <View style={styles.teamLogoWrapper}>
        {isLoading ? (
          <View style={styles.skeletonContainer}>
            <Animated.View
              style={[styles.shimmer, { transform: [{ translateX }] }]}
            />
          </View>
        ) : (
          <Image source={imageSource} style={styles.teamLogoImage} />
        )}
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={styles.editButton}
          activeOpacity={0.8}
          onPress={() => setIsOpenModal(true)}
        >
          <Feather name="edit-2" color="#fff" size={14} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleDelete(id)}
          style={styles.removeButton}
          activeOpacity={0.8}
        >
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
          id={id}
          visible={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </TouchableOpacity>
  );
};

export default RenderTeam;
