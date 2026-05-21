export const fixedSampleData = {
  teachingModes: ['Online', 'Offline', 'Both'],
  availableDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  subjects: [
    'Mathematics',
    'Science',
    'English',
    'History',
    'Geography',
    'Biology',
    'Chemistry',
    'Physics',
    'Computer Science',
    'Economics',
    'Bangla',
    'Arabic',
    'Fasion Design',
  ],
  timeSlots: [
    'Morning (6:00AM - 12:00PM)',
    'Afternoon (12:00PM - 5:00PM)',
    'Evening (5:00PM - 9:00PM)',
    'Night (9:00PM - 12:00AM)',
  ],
};

export const formateTimeSlot = (slot) => {
  if (!slot) return;
  const match = slot.match(/^(.+)\s\((.+)\)$/);
  const result = match ? { [match[1]]: match[2] } : {};
  return result;
};
