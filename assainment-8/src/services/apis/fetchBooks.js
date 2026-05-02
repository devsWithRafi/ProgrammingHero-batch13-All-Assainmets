// const baseUrl = 'http://localhost:3000';
const baseUrl = 'https://atheneum-ph-assainment-8.vercel.app';

export const fetchBooks = async (effect = false) => {
  try {
    const res = await fetch(`${baseUrl}/data/booksData.json`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch books');
    const data = await res.json();
    if (effect) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    return data ?? [];
  } catch (error) {
    throw new Error(error);
  }
};
