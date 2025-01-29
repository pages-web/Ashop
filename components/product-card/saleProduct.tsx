import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "../ui/image";
import { IProduct } from "../../types/product.types";
import Price from "../price/price";

const DiscountBadge = ({ value }: { value: number }) => (
  <span
    className="absolute z-20 top-2 right-2 bg-red-600 text-white text-xs font-bold px-6 py-2 rounded-md"
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
  hasSimilarity,
  ...rest
}: IProduct & { className?: string; discountValue?: number }) => {
  return (
    <div
      className={cn(
        "flex-shrink-0 bg-[#f0f0f0] border rounded-lg shadow-md transition-all duration-300 p-3 mb-5 mx-auto w-[100%] sm:w-[200px] sm:ml-5 sm:mr-5",
        className
      )}
      {...rest}
    >
      <div className="relative">
        {discountValue && <DiscountBadge value={discountValue} />}
        <Link
          href={{
            pathname: "/product/[id]",
            query: { value: discountValue },
          }}
          as={`/product/${_id}`}
          className="relative block w-full left-0 overflow-hidden pb-[100%] rounded-lg bg-white"
        >
          <Image
            src={attachment?.url || ""}
            alt={name || "Product Image"}
            className="absolute inset-0 w-full h-full rounded-t-md object-cover p-2 hover:scale-105"
            width={500}
            height={500}
            quality={100}
          />
        </Link>
      </div>
      <div className="p-4 text-sm">
        <Link
          href={`/product/${_id}`}
          className="hover:text-primary line-clamp-1 block text-center sm:text-left"
        >
          {name}
        </Link>
        <span
          className="block py-2 font-bold text-center sm:text-left"
          data-testid="product-card-vertical-price"
        >
          {discountValue ? (
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Price
                amount={unitPrice}
                className="text-sm text-neutral-500 line-through relative right-[6px]"
              />
              <Price
                amount={unitPrice}
                discountValue={discountValue}
                className="text-base relative right-[8px]"
              />
            </div>
          ) : (
            <Price amount={unitPrice} discountValue={discountValue} />
          )}
        </span>
      </div>
    </div>
  );
};

export default SaleProduct;
