import { env } from '@/lib/env';

export const fetchMyBookSessionsData = async ({ token }) => {
  try {
    const res = await fetch(
      `${env.NEXT_PUBLIC_SERVER_URL}/api/booking/book-sessions`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      },
    );
    const data = await res.json();
    if (data.success) {
      return data.data ?? [];
    } else return data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message || 'An error occoured!',
    };
  }
};
