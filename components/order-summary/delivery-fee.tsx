"use client";
import { rawTotalAmountAtom } from "@/store/order.store";
import { useAtomValue } from "jotai";
import Price from "../price/price";

const DeliveryFee = ({ deliverFee }: { deliverFee?: number }) => {
  const rawTotalAmount = useAtomValue(rawTotalAmountAtom);
  return (
    <>
      <div className="flex justify-between items-start">
        <span>Захиалгын төлбөр</span>
        <Price amount={rawTotalAmount} />
      </div>
      <div className="flex justify-between items-start">
        <span>Хүргэлтийн төлбөр</span>
        <Price amount={deliverFee || 0} />
      </div>
    </>
  );
};

export default DeliveryFee;
