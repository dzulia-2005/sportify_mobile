import { httpClient } from ".."
import { Venue_Endpoint } from "./index.enum"
import type { CreateVenuePayload, GetAllVenueResponse, UpdateVenuePayload } from "./index.type";

export const GetAllVenue = () => {
    return httpClient.get<GetAllVenueResponse>(Venue_Endpoint.GetAll).then((res)=>res.data);
}

export const GetVenueById = (Id:string) => {
    return httpClient.get<GetAllVenueResponse>(Venue_Endpoint.GetById.replace(":Id",Id)).then((res)=>res.data);
}

export const CreateVenue = (payload:CreateVenuePayload) => {
    return httpClient.post(Venue_Endpoint.Create_Venue,payload).then((res)=>res.data);
}

export const UpdateVenue = ({Id,payload}:{Id:string;payload:UpdateVenuePayload}) => {
    return httpClient.put(Venue_Endpoint.Update_Venue.replace(":Id",Id),payload).then((res)=>res.data);
}

export const DeleteVenue = (Id:string) => {
    return httpClient.delete(Venue_Endpoint.Delete_Venue.replace(":Id",Id)).then((res)=>res.data);
}