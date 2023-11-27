export const filter = (baseDateStr, events) => {
  const baseDate = new Date(baseDateStr);
  const formatDate = (date) => date.toISOString().slice(0, 10);

  return events
    .map(({ title, start, end, color }) => ({
      title,
      start: new Date(start),
      end: new Date(end),
      color: color,
    }))
    .filter(({ start, end }) => start <= baseDate && baseDate <= end)
    .map(({ title, start, end, color }) => ({
      title,
      start: formatDate(start),
      end: formatDate(end),
      color: color,
    }));
};
