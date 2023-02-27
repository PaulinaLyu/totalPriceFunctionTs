interface totalPriceProps {
  price: number;
  discount: number;
  isInstallment: boolean;
  months?: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: totalPriceProps): number => {
  const totalDiscount = (price * discount) / 100;
  const result = price - totalDiscount;
  if (isInstallment && months) {
    return result / months;
  }
  return result;
};

console.log(
  totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
);
