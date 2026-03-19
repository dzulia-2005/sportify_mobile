import { MeResponse } from "../../../../shared/api/auth/index.type"
import { SubscriptionResponse } from "../../../../shared/api/billing/index.type";

export type MeProp = {
   Me: MeResponse | undefined
};

export type SubscriptionProp = {
  Subscribed?: SubscriptionResponse;
};