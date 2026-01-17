import z from 'zod';

export const EditPlayerStatSchema = z.object({
  goals: z.number().min(0),
  assists: z.number().min(0),
  yellowCards: z.number().min(0),
  redCards: z.number().min(0),
});
