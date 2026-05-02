// const baseUrl = 'http://localhost:3000';
const baseUrl = 'https://atheneum-ph-assainment-8.vercel.app';

export const fetchBlogs = async () => {
  try {
    const res = await fetch(`${baseUrl}/data/blogData.json`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch blogs');
    const data = await res.json();
    if (process.env.NODE_ENV === 'development') {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    return data ?? [];
  } catch (error) {
    throw new Error(error);
  }
};
