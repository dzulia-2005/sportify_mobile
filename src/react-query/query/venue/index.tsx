import { useQuery } from "@tanstack/react-query"
import { GetAllVenue, GetVenueById } from "../../../api/venue"

export const useGetAllVenueQuery = () => {
    return useQuery({
        queryFn:GetAllVenue,
        queryKey:["getall"]
    })
}

export const useGetVenuebyIdQuery = (Id:string) => {
    return useQuery({
        queryFn:()=>GetVenueById(Id),
        queryKey:["getbyid"]
    })
}
