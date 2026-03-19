import React from 'react'
import { Text } from 'react-native'
import { styles } from '../styles/index.style'
import FormatPeriod from './FormatPeriod';
import { SubscriptionProp } from '../types/myAccount.type';



const Subscription:React.FC<SubscriptionProp> = ({
  Subscribed
}) => {

  const startUtc: string | undefined = Subscribed?.startsAtUtc;
  const endUtc: string | undefined = Subscribed?.endsAtUtc;
  const planName: string | undefined = Subscribed?.planCode;


  return (
    <Text style={styles.TextContainer}>
      <FormatPeriod
        startUtc={startUtc}
        endUtc={endUtc}
        planName={planName}
      />
    </Text>
  )
}

export default Subscription