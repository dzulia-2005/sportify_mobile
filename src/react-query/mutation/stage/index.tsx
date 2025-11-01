import { useMutation } from "@tanstack/react-query"
import { CreateStage, DeleteStage, UpdateStage } from "../../../api/stage";

export const CreateStageMutation = () => {
    return useMutation({
        mutationFn:CreateStage,
        mutationKey:["createstage"]
    });
}

export const UpdateStageMutation = () => {
    return useMutation({
        mutationFn:UpdateStage,
        mutationKey:["updatestage"]
    });
}

export const DeleteStageMutation = () => {
    return useMutation({
        mutationFn:DeleteStage,
        mutationKey:["deletestage"]
    });
}