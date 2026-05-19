'use server';

import { env } from '@/lib/env';
import { revalidatePath } from 'next/cache';

export const createNewTutor = async (data, token) => {
  try {
    if (token) {
      const res = await fetch(
        `${env.NEXT_PUBLIC_BETTER_AUTH_URL}/api/tutor/create`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(data),
        },
      );

      const result = await res.json();
      revalidatePath('/tutors');
      return result;
    }

    return {
      success: false,
      message: 'Auth-Token not found',
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: error.message || 'An error occoured!',
    };
  }
};
