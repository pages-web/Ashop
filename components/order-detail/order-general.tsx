import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { format } from "date-fns";
import Price from "../price/price";
import { useDetail } from "./order-detail";
import { useAtomValue } from "jotai";
import { configAtom } from "@/store/auth.store";
import { getDeliveryProduct } from "@/store/order.store";

import { getEnhancedNumber } from "@/lib/utils";

const OrderGeneral = () => {
  const { number, createdAt, totalAmount, items, extraInfo } = useDetail();
  const { deliveryProducts } = useAtomValue(configAtom) || {};
  const deliveryProduct = getDeliveryProduct(items, deliveryProducts);
  console.log("deliveryProductssssss", deliveryProduct);
  return (
    <Card>
      <CardHeader className="justify-between flex-row items-center md:py-3 space-y-0 md:space-y-2">
        <div>
          <div className="text-sm text-black/60 font-medium text-nowrap">
            Захиалгын дугаар
          </div>
          <div className="font-semibold md:font-bold text-base md:text-lg">
            {getEnhancedNumber(number)}
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-black/60 font-medium text-nowrap">
            Захиалга хийсэн огноо
          </div>
          <div className="font-semibold md:font-bold text-base md:text-lg">
            {format(createdAt, "yyyy/MM/dd hh:mm")}
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-3 md:py-4 text-sm md:text-base">
        <div className="flex justify-between items-center">
          <span>{"Барааны дүн"}</span>
          <Price
            amount={
              extraInfo?.rawTotalAmount -
              (deliveryProduct?.unitPrice ||
                0 + (deliveryProduct?.discountAmount || 0))
            }
          />
        </div>

        <div className="flex justify-between items-center">
          <span>{"Хүргэлтийн төлбөр"}</span>
          <Price amount={deliveryProduct?.unitPrice || 0} />
        </div>
        {extraInfo?.rawTotalAmount -
          (totalAmount + (deliveryProduct?.unitPrice || 0)) >
          0 && (
          <div className="flex justify-between items-start">
            <span>{"Discount"}</span>
            <Price
              amount={(extraInfo?.rawTotalAmount - totalAmount) * -1}
              className="text-destructive font-medium"
            />
          </div>
        )}
      </CardContent>
      <Separator />
      <CardFooter className="py-3 md:py-4 font-bold text-base md:text-lg text-nowrap">
        <div>{"Захиалгын дүн"}</div>
        <div className="ml-auto">
          {extraInfo?.rawTotalAmount - totalAmount > 0 ? (
            <div className="flex items-center gap-2">
              <Price amount={totalAmount} className="text-destructive" />
              <Price
                amount={extraInfo?.rawTotalAmount}
                className="line-through text-sm text-muted-foreground font-medium"
              />
            </div>
          ) : (
            <Price amount={totalAmount} />
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default OrderGeneral;
