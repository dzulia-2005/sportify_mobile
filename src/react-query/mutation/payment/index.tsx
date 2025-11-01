import { useMutation } from "@tanstack/react-query"
import { CreateCheckout, Webhook_Payment } from "../../../api/payment";

export const CreateCheckoutMutation = () => {
    return useMutation({
        mutationFn:CreateCheckout,
        mutationKey:["create-checkout"],
    });
}

export const WebhookMutation = () => {
    return useMutation({
        mutationFn:Webhook_Payment,
        mutationKey:["webhook"]
    })
}