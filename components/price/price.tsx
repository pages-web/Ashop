const Price = ({
  amount,
  discountValue,
  className,
}: {
  amount: number;
  className?: string;
  discountValue?: number;
} & React.ComponentProps<"p">) => {
  const total = discountValue ? amount * (1 - discountValue / 100) : amount;
  return <span className={className}>{total.toLocaleString()}₮</span>;
};

export default Price;