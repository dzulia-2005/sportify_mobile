import { useMutation } from "@tanstack/react-query"
import { CreateVenue, DeleteVenue, UpdateVenue } from "../../../api/venue"

export const CreateVenueMutation = () => {
    return useMutation({
        mutationFn:CreateVenue,
        mutationKey:["create-venue"]
    });
}

export const UpdateVenueMutation = () => {
    return useMutation({
        mutationFn:UpdateVenue,
        mutationKey:["update-venue"]
    });
}

export const DeleteVenueMutation = () => {
    return useMutation({
        mutationFn:DeleteVenue,
        mutationKey:["delete-venue"]
    });
}