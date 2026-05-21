'use server';

import { env } from '@/lib/env';
import { revalidatePath } from 'next/cache';


export const updateTutorsData = async ({ data, token, tutorId }) => {
  try {
    if (token) {
      const res = await fetch(
        `${env.NEXT_PUBLIC_SERVER_URL}/api/tutor/update-tutor/${tutorId}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
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
