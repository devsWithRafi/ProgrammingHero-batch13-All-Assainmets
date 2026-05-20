import { z } from 'zod';

export const tutorSchema = z.object({
  name: z
    .string('Name must not be empty.')
    .min(2, 'Name must be at least 2 characters.')
    .max(50, 'Name must be at most 50 characters.'),

  photo: z.url('Please enter a valid URL.'),

  subject: z
    .string('Subject must not be empty.')
    .min(2, 'Please select a subject'),

  availableDays: z
    .array(z.enum(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']))
    .min(1, 'Select at least one available day.'),

  availableTimeSlot: z
    .string('Time slot must not be empty.')
    .min(1, 'Please select a time slot.'),

  hourlyFee: z.coerce.number().min(200, 'Minimum hourly fee is 200.'),

  totalSlot: z.coerce.number().min(0, 'Total slots must be 0 or more.'),

  sessionStartDate: z.date('Please select a session start date.'),

  institution: z
    .string('Please enter an institution.')
    .min(2, 'Institution must be at least 2 characters.')
    .max(50, 'Institution must be at most 50 characters.'),

  experience: z.coerce.number().min(0, 'Experience must be 0 or more.'),

  location: z
    .string('Please enter a location.')
    .min(2, 'Location must be at least 2 characters.')
    .max(50, 'Location must be at most 50 characters.'),

  teachingMode: z
    .string(
      z.enum(['Online', 'Offline', 'Both']),
      'Please select a teaching mode.',
    )
    .min(1, 'Please select a teaching mode.'),

  about: z.string().max(1000, 'About must be at most 1000 characters'),
});
