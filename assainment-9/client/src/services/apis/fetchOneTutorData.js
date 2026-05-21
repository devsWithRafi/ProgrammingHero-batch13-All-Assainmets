import { env } from '@/lib/env';

const serverUrl = env.NEXT_PUBLIC_SERVER_URL;

export const fetchOneTutorData = async ({ id, token }) => {
  try {
    const res = await fetch(`${serverUrl}/api/tutor/get-tutors/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (data.success) {
      return data.data ?? {};
    } else return data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message || 'An error occoured!',
    };
  }
};
