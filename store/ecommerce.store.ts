import { IWish } from "@/types/ecommerce.types";
import { atom } from "jotai";

export const wishlistAtom = atom<IWish[] | null>(null);
