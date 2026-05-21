import { env } from '@/lib/env';

const serverUrl = env.NEXT_PUBLIC_BETTER_AUTH_URL;

export const fetchTutorsData = async ({ query = {} } = {}) => {
  try {
    const params = new URLSearchParams();

    Object.entries(query).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    const res = await fetch(
      `${serverUrl}/api/tutor/get-tutors?${params.toString()}`,
      {
        cache: 'no-store',
      },
    );
    if (!res.ok) throw new Error('Failed to fetch tutors');
    const { data } = await res.json();

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    return data ?? [];
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message || 'An error occoured!',
    };
  }
};
