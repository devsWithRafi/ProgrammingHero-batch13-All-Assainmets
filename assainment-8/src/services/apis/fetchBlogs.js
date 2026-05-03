const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export const fetchBlogs = async (effect = false) => {
  try {
    const res = await fetch(`${baseUrl}/data/blogData.json`);
    if (!res.ok) throw new Error('Failed to fetch blogs');
    const data = await res.json();
    if (effect) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    return data ?? [];
  } catch (error) {
    throw new Error(error);
  }
};
