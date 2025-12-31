import z from 'zod';

export const SchoolSchema = z.object({
  Name: z.string().min(1, 'LogoName is required'),
  LogoFile: z.object({
    uri: z.string().min(1, 'logo is required'),
  }),
});
