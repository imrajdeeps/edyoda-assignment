const GST = 0.18;
const PROFIT_RATIO = 0.02;
const rawData = [
  [99, 1, 12, "expired", "Offer expired"],
  [179, 2, 12, "first", "Recommended"],
  [149, 3, 6, "second"],
  [99, 4, 3, "third"],
];

const createItem = ([totalPrice, id, months, name, flag]) => {
  const priceWithoutGST = totalPrice / (1 + GST);
  const actualCost = Math.round(
    priceWithoutGST - priceWithoutGST * PROFIT_RATIO
  );
  const pricePerMonth = Math.round(totalPrice / months);
  const text = `${months} Months Subscription`;

  return { id, totalPrice, actualCost, pricePerMonth, text, name, flag };
};

export const mockData = rawData.map((element) => createItem(element));
