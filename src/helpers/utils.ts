export const getImageUrl = (imagePath: string): string => {
  const base = import.meta.env.BASE_URL;
  return `${base}${imagePath}`;
};
