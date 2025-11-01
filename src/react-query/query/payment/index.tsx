import { useQuery } from "@tanstack/react-query"
import { Checkout_Subscription } from "../../../api/payment"

export const SubscriptionQuery = (userId:string) => {
    return useQuery({
        queryFn: () => Checkout_Subscription(userId),
        queryKey:["subscription",userId]
    })
}