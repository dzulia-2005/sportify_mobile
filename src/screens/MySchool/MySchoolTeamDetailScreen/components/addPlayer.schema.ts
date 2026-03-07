import { z } from 'zod';

export const AddMySchoolPlayerSchema = z.object({
  FirstName: z
    .string()
    .trim()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name cannot exceed 50 characters'),

  LastName: z
    .string()
    .trim()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name cannot exceed 50 characters'),

  Position: z
    .string()
    .trim()
    .min(2, 'Position must be at least 2 characters')
    .max(30, 'Position cannot exceed 30 characters'),

  ParentFirstName: z
    .string()
    .trim()
    .min(2, 'Parent first name must be at least 2 characters')
    .max(50, 'Parent first name cannot exceed 50 characters'),

  ParentLastName: z
    .string()
    .trim()
    .min(2, 'Parent last name must be at least 2 characters')
    .max(50, 'Parent last name cannot exceed 50 characters'),

  ParentPhoneNumber: z
    .string()
    .trim()
    .min(7, 'Phone number is too short')
    .max(20, 'Phone number is too long')
    .regex(/^\+?[0-9 ()-]{7,20}$/, 'Invalid phone number format'),

  ProfilePictureFile: z.object({
    uri: z.string().min(1, 'logo is required'),
  }),

  TeamId: z.string().min(1, 'Team is required'),
  MySchoolId: z.string().min(1, 'schoolId is required'),
  UserId: z.string().min(1, 'userid is required'),
  birthDate: z.string().min(1, 'Birth date is required'),
  Nationality:z.string().min(1,"Nationality is required")
});


export type AddPlayerType = z.infer<typeof AddMySchoolPlayerSchema>;