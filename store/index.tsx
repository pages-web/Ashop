"use client";

import {
  type Atom,
  Provider as JotaiProvider,
  atom,
  useAtomValue,
} from "jotai";
import Apollo from "@/app/ApolloClient";
import { atomWithStorage, selectAtom } from "jotai/utils";

export const categorySheetAtom = atom<boolean>(false);
export const cartSheetAtom = atom<boolean>(false);
export const searchPopupAtom = atom<boolean>(false);
export const birthDateAtom = atomWithStorage<Date | undefined>(
  "birthDate",
  undefined
);

export function useSelectAtom(
  anAtom: Atom<unknown>,
  keyFn: (v: unknown, prevSlice?: unknown) => unknown
) {
  return useAtomValue(selectAtom(anAtom, keyFn));
}

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <JotaiProvider>
      <Apollo>{children}</Apollo>
    </JotaiProvider>
  );
};

export default Providers;
