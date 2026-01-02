import z from 'zod';

export const tournamentSchema = z.object({
  name: z.string().min(1, 'name is required'),
  startDate: z.string().min(1, 'start date is required'),
  endDate: z.string().min(1, 'end date is required'),
  mySchoolId: z.string().min(1, 'school id required'),
  matchType: z.number(),
});
