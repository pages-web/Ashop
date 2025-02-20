const Price = ({
  amount = 0,
  discountValue = 0,
  className,
}: {
  amount?: number;
  className?: string;
  discountValue?: number;
} & React.ComponentProps<"p">) => {
  const total = amount * (1 - discountValue / 100);
  return <span className={className}>{total.toLocaleString()}₮</span>;
};

export default Price;
