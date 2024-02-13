export const translate = (value: string, lang = 'en') => {
  const en = {
    [value]: value,
  };

  return en[value];
};
