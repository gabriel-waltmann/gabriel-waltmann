export const getTotalWorkTime = (startYear: number): number => {
  const start = new Date();
  const end = new Date();

  start.setFullYear(startYear);

  return end.getFullYear() - start.getFullYear();
};
