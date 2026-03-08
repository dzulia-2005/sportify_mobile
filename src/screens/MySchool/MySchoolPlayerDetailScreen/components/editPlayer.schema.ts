import { z } from 'zod';

export const UpdateMySchoolPlayerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name cannot exceed 50 characters'),

  lastName: z
    .string()
    .trim()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name cannot exceed 50 characters'),

  position: z
    .string()
    .trim()
    .min(2, 'Position must be at least 2 characters')
    .max(30, 'Position cannot exceed 30 characters'),

  parentFirstName: z
    .string()
    .trim()
    .min(2, 'Parent first name must be at least 2 characters')
    .max(50, 'Parent first name cannot exceed 50 characters'),

  parentLastName: z
    .string()
    .trim()
    .min(2, 'Parent last name must be at least 2 characters')
    .max(50, 'Parent last name cannot exceed 50 characters'),

  parentPhoneNumber: z
    .string()
    .trim()
    .min(7, 'Phone number is too short')
    .max(20, 'Phone number is too long')
    .regex(/^\+?[0-9 ()-]{7,20}$/, 'Invalid phone number format'),

  birthDate: z.string().min(1, 'Birth date is required'),
  Nationality:z.string().min(1,"Nationality is required"),
  ProfilePictureFile: z.object({
    uri: z.string().min(1, 'logo is required'),
  }),

  teamId: z.string().min(1, 'Team is required'),
});

