import z from 'zod';

export const addTeamSchema = z.object({
  Name: z.string().min(1, 'name is required'),
  MySchoolId: z.string(),
  LogoFile: z.object({
    uri: z.string().min(1, 'logo is required'),
  }),
});
