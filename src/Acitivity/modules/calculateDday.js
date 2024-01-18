export const calculateDday = (endedAt) => {
  const endDate = new Date(endedAt);
  const timeDiff = endDate - new Date();
  const result = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return result >= 0 ? `- ${result}` : `+ ${-result}`;
};
