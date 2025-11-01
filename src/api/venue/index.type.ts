export type GetAllVenueResponse = {
    id: string;
    name: string;
    address: string;
    capacity: number;
}

export type CreateVenuePayload = {
    payload : {
        name: string;
        address: string;
        capacity: number;
    }
}

export type UpdateVenuePayload = {
    payload : {
        name: string;
        address: string;
        capacity: number;
    }
}