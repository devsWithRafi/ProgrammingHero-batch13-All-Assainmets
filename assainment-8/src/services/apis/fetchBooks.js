export const fetchBooks = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/books');
    if (!res.ok) throw new Error('Failed to fetch books');
    const { data } = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
