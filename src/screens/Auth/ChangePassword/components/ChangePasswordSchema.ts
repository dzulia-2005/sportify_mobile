import z from 'zod';

export const ChangePasswordSchema = z.object({
  UserName: z.string().min(1),
  newPassword: z.string().min(1),
});
