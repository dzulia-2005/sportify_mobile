import z from "zod";

export const teamSchema = z.object({
    name: z.string().min(1, 'name is required'),
    coach:z.string().min(1,"coach is required"),
    tournamentId: z.string(),
    LogoFile: z.object({
        uri: z.string().min(1, 'logo is required'),
    }),
})