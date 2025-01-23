"use client";

import { Counter, CounterButton, CounterInput } from "../counter/counter";
import { Button } from "../ui/button";
import { useState } from "react";
import { useAtom, useSetAtom } from "jotai";
import { addToCartAtom } from "@/store/cart.store";
import { IProduct } from "@/types/product.types";
import { cartSheetAtom } from "@/store";
import { usePossibleQuantity } from "@/sdk/hooks/cart";

const AddToCart = (product: IProduct) => {
  const [count, setCount] = useState(1);
  const [loading, addToCart] = useAtom(addToCartAtom);
  const setOpenCart = useSetAtom(cartSheetAtom);
  const { checkRemainder, possibleQuantity, disableActions } =
    usePossibleQuantity(product);

  return (
    <div className="py-4 flex flex-col sm:flex-row gap-4 sm:gap-6">
      <div className="flex w-full sm:w-auto">
      <Counter 
            size="lg" 
            disabled={disableActions} 
          >
          <CounterButton
            minus
            onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
          />
          <CounterInput
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <CounterButton
            onClick={() =>
              setCount((prev) =>
                !checkRemainder
                  ? prev + 1
                  : possibleQuantity > prev + 1
                  ? prev + 1
                  : possibleQuantity
              )
            }
          />
        </Counter>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <Button
          className="h-11 font-semibold bg-white text-primary hover:bg-gray-200"
          size="lg"
          onClick={() => {
            addToCart({ ...product, count });
            setOpenCart(true);
            setCount(possibleQuantity > 0 ? 1 : 0);
          }}
          // disabled={disableActions || loading}
        >
          Сагсанд нэмэх
        </Button>
        <Button
          className="h-11 font-semibold"
          size="lg"
          onClick={() => {
            addToCart({ ...product, count });
            setOpenCart(true);
            setCount(possibleQuantity > 0 ? 1 : 0);
          }}
          // disabled={disableActions || loading}
        >
          Худалдан авах
        </Button>
      </div>
    </div>
  );
};

export default AddToCart;
