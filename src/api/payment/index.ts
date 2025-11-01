import { httpClient } from ".."
import { Payment_Endpoints } from "./index.enum"
import type { Create_Checkout } from "./index.type"

export const CreateCheckout = ({payload}:Create_Checkout) => {
    return httpClient.post(Payment_Endpoints.Create_Checkout_Payment,payload);
}

export const Webhook_Payment = () => {
    return httpClient.post(Payment_Endpoints.WebHook);
}

export const Checkout_Subscription = (userId:string) => {
    return httpClient.get(Payment_Endpoints.Checkout_Subscription_ByUserId.replace(":userId",userId))
}