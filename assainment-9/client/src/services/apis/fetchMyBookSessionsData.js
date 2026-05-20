import { env } from "@/lib/env";

export const fetchMyBookSessionsData = async ({ token }) => {
  try {
    const res = await fetch(
      `${env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/my-book-session/get-my-book-session`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
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
