import { httpClient } from "..";
import { BillingEndpoint } from "./index.enum";
import { CheckoutPayload, CheckoutResponse, SubscriptionResponse } from "./index.type";

export const checkout = (payload: CheckoutPayload): Promise<CheckoutResponse> => {
  return httpClient.post(BillingEndpoint.checkout, payload).then((res) => res.data);
};

export const subscription = (): Promise<SubscriptionResponse> => {
  return httpClient.get<SubscriptionResponse>(BillingEndpoint.subscription).then((res) => res.data);
};
