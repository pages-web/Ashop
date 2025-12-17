"use client";
import { useAtomValue } from "jotai";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import {
  billTypeAtom,
  deliveryInfoAtom,
  descriptionAtom,
  dueDateAtom,
  registerNumberAtom,
  typeAtom,
} from "@/store/order.store";
import TakeAddress from "../take-address";

import OrderDescription from "../order-description";

const VerifyAddress = () => {
  const { firstName, lastName, email, phone, district, street, companyName } =
    useAtomValue(deliveryInfoAtom) || {};
  const description = useAtomValue(descriptionAtom);
  const billType = useAtomValue(billTypeAtom);
  const registerNumber = useAtomValue(registerNumberAtom);
  const type = useAtomValue(typeAtom);
  const dueDate = useAtomValue(dueDateAtom);
  return (
    <>
      <div className="py-6">
        <div className="text-black/60 mb-3">
          Захиалагч:{" "}
          {billType === "1" ? "Хувь хүн" : `${registerNumber} - ${companyName}`}
        </div>
        <div className="font-semibold text-sm">
          {firstName} {lastName || ""}
        </div>
        <div>
          {email} {phone}
        </div>
      </div>
      <Separator />
      <div className="py-6">
        <div className="text-black/60 mb-3">
          {type === "delivery" ? "Хүргэлтийн хаяг" : "Очиж авах"}
        </div>
        <div className="gap-4 flex items-center my-4"></div>
        {type === "take" && <TakeAddress />}
        {type === "delivery" && (
          <>
            <div>
              <OrderDescription
                detail={description}
                district={district}
                street={street}
              />
            </div>
            <div className="flex gap-4 mt-4">
              <Badge
                variant="secondary"
                className="py-1.5 px-4 text-sm font-medium rounded-[6px]"
              >
                {firstName} {lastName}
              </Badge>
              <Badge
                variant="secondary"
                className="py-1.5 px-4 text-sm font-medium  rounded-[6px]"
              >
                {phone}
              </Badge>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default VerifyAddress;
