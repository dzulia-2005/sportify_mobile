import { z } from 'zod';

export const EditPlayerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  position: z.string().min(1, 'Position is required'),
  profilePictureFile: z.object({
    uri: z.string(),
  }),
  birthDate: z.string().min(1, 'Birth date is required'),
  yellowCards: z.number().min(0),
  redCards: z.number().min(0),
  goals: z.number().min(0),
  assists: z.number().min(0),
});

export type EditPlayerFormValues = z.infer<typeof EditPlayerSchema>;
