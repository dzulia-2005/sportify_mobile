import React, { useState } from 'react'
import {  Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles/teams.styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import image from "../../../../shared/assets/images/58-583825_team-icon-png-round-transparent-png.png";
import { Prop } from '../types/teams.type';
import { useDeleteTeamMutation } from '../../../../feature/tournament/team/model/delete/useDeleteTeamMutation';
import {  useQueryClient } from '@tanstack/react-query';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import EditTeamModal from './EditTeamModal/editTeamModal';
import TournamentCardSkeleton from '../../../mySchool/tournamentTeams/components/TeamCardSkeleton';

const TeamCard:React.FC<Prop> = ({
  item,
  isLoading
}) => {

  const imageSource = item.logoUrl ? {uri:item.logoUrl} : image;
  const queryclient = useQueryClient();
  const {mutate:DeleteTeam} = useDeleteTeamMutation();
  const [isOpenModal,setIsOpenModal] = useState(false);

  if (isLoading) {
    return <TournamentCardSkeleton />;
  }

  const handleDeleteClick = (id:string) => {
    DeleteTeam(id,{
      onSuccess:() => {
        queryclient.invalidateQueries({ queryKey: ['get-tournament'] });
      },
      onError:(err)=>{
        return showErrorToast(err);
      }
    })
  }


  return (
  <TouchableOpacity style={styles.cardTeams}>
                  <View style={styles.rightSide}>
                    <View>
                        <Image
                          source={imageSource}
                          style={styles.image}
                          resizeMode="cover"
                        />
                    </View>
                    <View>
                      <Text style={{color:'#fff',fontWeight:'bold'}}>{item.name}</Text>
                      <Text style={{color:'#fff',fontWeight:'bold'}}>members: {item.players.length}</Text>
                    </View>
                  </View>
    
                  <View>
                    <View style={styles.btnContainer}>
                      <TouchableOpacity
                        onPress={()=>setIsOpenModal(true)}
                      >
                        <Icon name='pencil-circle-outline' size={30} color='#4968e4'/>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={()=>handleDeleteClick(item.id)}
                      >
                        <Icon name='delete-circle' size={30} color='#be3636'/>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {
                    isOpenModal && (
                      <EditTeamModal
                        Id={item.id}
                        tournamentId={item.tournamentId}
                        onClose={()=>setIsOpenModal(false)}
                        visible={isOpenModal}
                      />
                    )
                  }
              </TouchableOpacity>
  )
}

export default TeamCard