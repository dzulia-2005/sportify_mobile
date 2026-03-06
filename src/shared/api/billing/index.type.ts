export type PlanCode = 'SCHOOL_MONTHLY' | 'TOURNAMENT_MONTHLY' | 'BOTH_MONTHLY';

export type Feature = 'SCHOOL' | 'TOURNAMENT';

export type SubscriptionResponse = {
  planCode: PlanCode;
  startsAtUtc: string;
  endsAtUtc: string;
};

export type PlanGuardProps = {
  feature: Feature;
  children: React.ReactNode;
};


export type CheckoutPayload = {
  planCode: number;
};

export type CheckoutResponse = {
  redirectUrl: string;
  externalOrderId: string;
};
