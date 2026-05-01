export const validateUrl = (url) => {
  try {
    if (new URL(url)) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
