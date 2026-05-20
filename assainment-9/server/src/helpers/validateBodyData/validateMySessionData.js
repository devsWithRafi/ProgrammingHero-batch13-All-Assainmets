import { z } from 'zod';

export const validateMySessionData = z.object({
  name: z.string().min(2).max(50),
  phoneNumber: z.string(),
  tutorName: z.string().min(2).max(50),
  tutorId: z.string(),
  email: z.string().email(),
  status: z.enum(['Pending', 'Confirmed', 'Cancelled']),
});
