import React from 'react'
import { Text } from 'react-native'
import { styles } from '../styles/index.style'
import { useSubscriptionQuery } from '../../../../feature/billing/billing/model/subscription/useSubscriptionQuery';
import FormatPeriod from './FormatPeriod';

const Subscription:React.FC = () => {
  const { data: Subscribed } = useSubscriptionQuery();

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