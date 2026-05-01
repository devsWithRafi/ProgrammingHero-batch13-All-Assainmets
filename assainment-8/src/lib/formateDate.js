export const formateDate = (date) => {
  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formatedDate;
};
