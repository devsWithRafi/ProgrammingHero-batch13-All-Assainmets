import { z } from 'zod';

export const validateTutorData = z.object({
  name: z.string().min(2).max(50),
  photo: z.string().url(),
  subject: z.string().min(2).max(20),
  availableDays: z.array(
    z.enum(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']),
  ),
  availableTimeSlot: z.string(),
  hourlyFee: z.number().min(200),
  totalSlot: z.number().min(0),
  sessionStartDate: z.string(),
  institution: z.string().min(2).max(50),
  experience: z.number().min(0),
  location: z.string().min(2).max(50),
  teachingMode: z.enum(['Online', 'Offline', 'Both']),
});
