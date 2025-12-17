import { httpClient } from ".."
import { Venue_Endpoint } from "./index.enum"
import type { CreateVenuePayload, GetAllVenueResponse, UpdateVenuePayload } from "./index.type";

export const GetAllVenue = () => {
    return httpClient.get<GetAllVenueResponse>(Venue_Endpoint.GetAll);
}

export const GetVenueById = (Id:string) => {
    return httpClient.get<GetAllVenueResponse>(Venue_Endpoint.GetById.replace(":Id",Id));
}

export const CreateVenue = (payload:CreateVenuePayload) => {
    return httpClient.post(Venue_Endpoint.Create_Venue,payload);
}

export const UpdateVenue = ({Id,payload}:{Id:string;payload:UpdateVenuePayload}) => {
    return httpClient.put(Venue_Endpoint.Update_Venue.replace(":Id",Id),payload);
}

export const DeleteVenue = (Id:string) => {
    return httpClient.delete(Venue_Endpoint.Delete_Venue.replace(":Id",Id));
}