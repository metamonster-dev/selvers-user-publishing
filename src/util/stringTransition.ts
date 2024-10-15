export const dateFormat = (str: string) => {
  return str.replace(/-/gi, "/");
};

export const priceFormat = (str: string) => {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
