import { checkRemainderAtom } from "@/store/auth.store";
import { itemsAtom } from "@/store/order.store";
import { IProduct } from "@/types/product.types";
import { useAtomValue } from "jotai";

export const usePossibleQuantity = (product: IProduct) => {
  const checkRemainder = useAtomValue(checkRemainderAtom);
  const cart = useAtomValue(itemsAtom);

  const quantityInCart =
    cart.find((item) => item.productId === product._id)?.count || 0;

  const remainder =
    typeof product.remainder === "number" ? product.remainder : Infinity;

  const possibleQuantity = Math.max(0, remainder - quantityInCart);

  const disableActions = checkRemainder && possibleQuantity <= 0;

  return { checkRemainder, possibleQuantity, disableActions };
};
