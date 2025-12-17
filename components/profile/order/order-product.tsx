import Price from "@/components/price/price";
import { ProductDiscount } from "@/components/product-card/product-discount";
import { Badge } from "@/components/ui/badge";
import Image from "@/components/ui/image";
import { getProductNameCode } from "@/lib/getProductNameCode";
import { OrderItem } from "@/types/order.types";

const OrderProduct = ({
  productImgUrl,
  productName,
  status,
  count,
  unitPrice,
  discountAmount,
}: OrderItem) => {
  const { name, code } = getProductNameCode(productName);
  return (
    <div className="overflow-hidden flex p-2 border-b last-of-type:border-b-0 gap-2 md:gap-0">
      <ProductDiscount
        discountAmount={discountAmount || 0}
        unitPrice={unitPrice}
        className="h-20 w-20 md:h-32 md:w-32"
      >
        <Image
          src={productImgUrl}
          alt=""
          height={300}
          width={300}
          className="h-20 w-20 md:h-32 md:w-32 rounded overflow-hidden flex-none"
        />
      </ProductDiscount>
      <div className="flex justify-between flex-1 p-2 md:p-6 flex-wrap text-sm md:text-base gap-2 md:gap-0">
        <div>
          <div className="text-sm text-neutral-500 font-medium">#{code}</div>
          <h3 className="font-medium capitalize mb-1">{name || productName}</h3>
          <Badge className="rounded-[6px]">{status}</Badge>
        </div>
        <div>
          <div className="flex gap-4 pt-5">
            <Price amount={unitPrice} />
            <Badge variant="secondary">x{count}</Badge>
            <Price amount={unitPrice * count} className="font-semibold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
