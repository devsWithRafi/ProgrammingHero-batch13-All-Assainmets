const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export const fetchBooks = async (effect = false) => {
  try {
    const res = await fetch(`${baseUrl}/data/booksData.json`);
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
