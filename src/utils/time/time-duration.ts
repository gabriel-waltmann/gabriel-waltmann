export const getHours = (startDateISOString: string, endDateISOString: string): string => {
  const startDate = new Date(startDateISOString);
  const endDate = new Date(endDateISOString);

  const diffTime = endDate.getTime() - startDate.getTime();
  const diffHours = diffTime / (1000 * 60 * 60);

  return diffHours.toFixed(2);
}