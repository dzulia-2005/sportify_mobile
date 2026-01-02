import z from 'zod';

export const TeamSchema = z.object({
  Name: z.string().min(1, 'name field is required'),
  LogoFile: z.object({
    uri: z.string().min(1, 'logo is required'),
  }),
});
