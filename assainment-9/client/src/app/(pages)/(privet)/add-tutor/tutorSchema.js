import { z } from 'zod';

export const tutorSchema = z.object({
  name: z
    .string({ message: 'Name must not be empty.' })
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(50, { message: 'Name must be at most 50 characters.' }),
  photo: z.string().url({ message: 'Please enter a valid URL.' }),
  subject: z
    .string({ message: 'Subject must not be empty.' })
    .min(2, 'Please select a subject'),
  availableDays: z
    .array(z.enum(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']))
    .min(1, { message: 'Select at least one available day.' }),
  availableTimeSlot: z
    .string({ message: 'Time slot must not be empty.' })
    .min(1, 'Please select a time slot.'),
  hourlyFee: z.coerce
    .number()
    .min(200, { message: 'Minimum hourly fee is 200.' }),
  totalSlot: z.coerce
    .number()
    .min(0, { message: 'Total slots must be 0 or more.' }),
  sessionStartDate: z.date({
    required_error: 'Please select a session start date.',
  }),
  institution: z
    .string({ message: 'Please enter an institution.' })
    .min(2, { message: 'Institution must be at least 2 characters.' })
    .max(50, { message: 'Institution must be at most 50 characters.' }),
  experience: z.coerce
    .number()
    .min(0, { message: 'Experience must be 0 or more.' }),
  location: z
    .string({ message: 'Please enter a location.' })
    .min(2, { message: 'Location must be at least 2 characters.' })
    .max(50, { message: 'Location must be at most 50 characters.' }),
  teachingMode: z
    .string(z.enum(['Online', 'Offline', 'Both']), {
      message: 'Please select a teaching mode.',
    })
    .min(1, {
      message: 'Please select a teaching mode.',
    }),
});
