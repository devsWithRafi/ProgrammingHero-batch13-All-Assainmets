import * as z from 'zod';

export const signUpFormSchema = z.object({
  photoUrl: z.url({ message: 'Please enter a valid URL.' }),
  name: z
    .string({ message: 'Name must not be empty.' })
    .min(2, 'Name must be at least 2 characters.')
    .max(50, 'Name must be at most 50 characters.'),
  email: z.email({ message: 'Invalid email address.' }),
  password: z
    .string({ message: 'Password must not be empty.' })
    .min(6, 'Password must be at least 6 characters.')
    .max(50, 'Password must be at most 50 characters.')
    .regex(/[A-Z]/, 'Must contain at least one uppercase letter.')
    .regex(/[a-z]/, 'Must contain at least one lowercase letter.')
    .regex(/[0-9]/, 'Must contain at least one number.'),
});
