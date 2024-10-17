export const dateFormat = (str: string) => {
  return str.replace(/-/gi, "/");
};

export const priceFormat = (price: string) => {
  if (Number(price) > 0) {
    return `${price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
  } else {
    return "무료";
  }
};
