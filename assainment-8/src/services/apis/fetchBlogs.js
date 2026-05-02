const baseUrl = 'http://localhost:3000';

export const fetchBlogs = async () => {
  try {
    const res = await fetch(`${baseUrl}/data/blogData.json`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch blogs');
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return data ?? [];
  } catch (error) {
    throw new Error(error);
  }
};
