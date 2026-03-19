import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { styles } from '../styles/index.style'
import FullName from '../components/FullName'
import Email from '../components/Email'
import Role from '../components/Role'
import Subscription from '../components/Subscription'
import { useSubscriptionQuery } from '../../../../feature/billing/billing/model/subscription/useSubscriptionQuery'
import { useMeQuery } from '../../../../feature/auth/me/model/useMeQuery'

const MyAccount:React.FC = () => {
  const { data: Subscribed , isLoading:SubscribeLoading} = useSubscriptionQuery();
  const { data:Me,isLoading:MeLoading} = useMeQuery();

  if(MeLoading || SubscribeLoading){
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#10b981" />
        </View>
      )
    }
  return (
    <View style={styles.container}>
        <View style={styles.InfoContainer}>
           <FullName Me={Me}/>
           <Email Me={Me}/>
           <Role/>
           <Subscription
            Subscribed={Subscribed}
           />
        </View>
    </View>
  )
}

export default MyAccount