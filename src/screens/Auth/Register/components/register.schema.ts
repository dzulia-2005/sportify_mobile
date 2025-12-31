import z from 'zod';

export const RegisterSchema = z.object({
  email: z.string(),
  userName: z.string().min(1),
  password: z.string().min(6),
});
