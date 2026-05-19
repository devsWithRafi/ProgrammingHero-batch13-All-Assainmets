import { env } from '@/lib/env';

const serverUrl = env.NEXT_PUBLIC_BETTER_AUTH_URL;

export const fetchTutorsData = async () => {
  try {
    const res = await fetch(`${serverUrl}/api/tutor/get-tutors`);
    if (!res.ok) throw new Error('Failed to fetch tutors');
    const { data } = await res.json();
    return data ?? [];
  } catch (error) {
    throw new Error(error);
  }
};
