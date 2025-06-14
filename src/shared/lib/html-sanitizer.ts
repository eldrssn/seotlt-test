import DOMPurify from 'dompurify';

export const sanitizeHtml = (dirtyHtml: string): string => {
  return DOMPurify.sanitize(dirtyHtml);
};
