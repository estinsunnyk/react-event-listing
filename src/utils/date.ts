/**
 * Formats a date string into a more readable format.
 * @param dateStr - The date string to format.
 * @returns A formatted date string in the format "DD Month YYYY".
 */
export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);

  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
