import { env } from '@/lib/env';

const serverUrl = env.NEXT_PUBLIC_SERVER_URL;

export const fetchMyTutors = async ({ token }) => {
  try {
    const res = await fetch(`${serverUrl}/api/tutor/my-tutors`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
    const result = await res.json();
    if (result.success) {
      return result.data ?? [];
    } else return result;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message || 'An error occoured!',
    };
  }
};
