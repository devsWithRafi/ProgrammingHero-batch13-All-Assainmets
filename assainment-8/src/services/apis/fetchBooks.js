
const baseUrl = "http://localhost:3000";

export const fetchBooks = async () => {
  try {
    const res = await fetch(`${baseUrl}/data/booksData.json`,
      { cache: 'no-store' },
    );
    if (!res.ok) throw new Error('Failed to fetch books');
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return data ?? [];
  } catch (error) {
    throw new Error(error);
  }
};
