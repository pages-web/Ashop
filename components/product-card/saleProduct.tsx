import Link from "next/link";
import Image from "../ui/image";
import { IProduct } from "../../types/product.types";
import Price from "../price/price";
import Saleadd from "./saleadd";

const DiscountBadge = ({ value }: { value: number }) => (
  <span
    className="absolute z-20 top-2 right-2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-md"
    aria-label={`Discount ${value}%`}
  >
    sale {value}%
  </span>
);

const SaleProduct = ({
  className,
  discountValue,
  name,
  attachment,
  unitPrice,
  _id,
  ...rest
}: IProduct & { className?: string; discountValue?: number }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-card p-4 flex flex-col justify-between min-h-96">
      <div>
        <div className="relative w-full h-[200px]">
          {discountValue && <DiscountBadge value={discountValue} />}
          <Link
            href={`/product/${_id}`}
            className="relative block w-full h-full overflow-hidden rounded-lg bg-white"
          >
            <Image
              src={attachment?.url || ""}
              alt={name || "Product Image"}
              className="absolute inset-0 w-full h-full object-cover p-2 hover:scale-105"
              width={500}
              height={500}
              quality={100}
            />
          </Link>
        </div>
        {name && (
          <Link
            href={`/product/${_id}`}
            className="hover:text-primary block line-clamp-1 font-bold text-lg text-center mt-2"
          >
            {name}
          </Link>
        )}
      </div>
      <div className="text-center mt-2">
        <div className="flex gap-3 items-center">
          {discountValue && (
            <span className="text-primary">
              <Price amount={unitPrice} discountValue={discountValue} />
            </span>
          )}
          <span className="line-through text-red-800 text-xs">
            <Price amount={unitPrice} />
          </span>
          <Saleadd
            {...rest}
            name={name}
            unitPrice={unitPrice}
            _id={_id}
            attachment={attachment}
          />
        </div>
      </div>
    </div>
  );
};

export default SaleProduct;
