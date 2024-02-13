export const formatDate = (
  date: Date,
  lang: string = 'en',
  format: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
) => new Date(date).toLocaleDateString(lang, format);
