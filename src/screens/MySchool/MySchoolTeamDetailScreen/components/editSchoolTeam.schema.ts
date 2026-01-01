import z from 'zod';

export const editSchoolTeamSchema = z.object({
  Name: z.string().min(1, 'name is required'),
  LogoFile: z.object({
    uri: z.string().min(1, 'logo is required'),
  }),
});
