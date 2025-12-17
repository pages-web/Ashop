"use client";
import { UseFormReturn } from "react-hook-form";
import CartCount from "../cart/cart-count";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import DeliveryFee from "./delivery-fee";
import { IAddress } from "@/types/order.types";
import { formSchema } from "../address-form/address-form";
import { useAtomValue } from "jotai";
import { getCharge } from "@/lib/getAddress";
import { deliveryItemAtom, itemsTotalAtom } from "@/store/order.store";
import { z } from "zod";
import Price from "../price/price";

const OrderSummary = ({
  className,
  children,
  content,
  addressList,
  form,
}: React.PropsWithChildren & {
  className?: string;
  content?: React.ReactNode;
  form?: UseFormReturn<z.infer<typeof formSchema>, any>;

  addressList?: Partial<IAddress>[];
}) => {
  const isTake = form?.watch("isTake");
  const addressId = form?.watch("addressId");

  const { district, street } =
    addressList?.find((address) => address._id === addressId) || {};
  const totalAmount = useAtomValue(itemsTotalAtom);
  const deliveryItem = useAtomValue(deliveryItemAtom);

  const deliveryFee = isTake
    ? 0
    : deliveryItem?.unitPrice ||
      getCharge({ district, subdistrict: street, totalAmount });
  return (
    <Card className={className}>
      <CardHeader className="flex-row space-y-0 justify-between items-center md:py-4">
        <CardTitle className="md:text-lg">Төлбөрийн мэдээлэл</CardTitle>
        <div className="font-semibold">
          (Бүтээгдэхүүн: <CartCount />)
        </div>
      </CardHeader>
      <CardContent className="py-0 md:py-0 space-y-2">
        {!!content && (
          <div>
            <Separator />
            <div className="py-3 space-y-1">{content}</div>
            <Separator />
          </div>
        )}
        <DeliveryFee deliverFee={deliveryFee} />
      </CardContent>
      <CardFooter className="flex-col gap-4 md:pb-6 md:pt-3">
        <Separator />
        <div className="text-lg md:text-xl font-bold flex justify-between w-full">
          <p>Нийт төлөх дүн</p>
          <Price amount={totalAmount + (deliveryFee || 0)} />
        </div>
        <Separator />
        {children}
      </CardFooter>
    </Card>
  );
};

export default OrderSummary;
