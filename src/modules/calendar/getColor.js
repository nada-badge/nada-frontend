export const getColor = (length) => {
  return Array.from({ length: length }, (_, i) => {
    const color = (i * 20) % 350;
    return `hsl(${color},100%, 85%)`;
  });
};
