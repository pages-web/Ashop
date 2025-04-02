"use client";

import { cn } from "@/lib/utils";
import { wishlistAtom } from "@/store/ecommerce.store";
import { useAtomValue } from "jotai";
import Link from "next/link";
import Image from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Delete from "./delete";

const Wishlist = () => {
  const wishlist = useAtomValue(wishlistAtom);
  return (
    <>
      {wishlist?.map((w) => (
        <div
          className={cn("hover:shadow-md border flex-auto flex-shrink-0 group")}
          key={w._id}
        >
          <div className="relative">
            <Link
              href={`/product/${w.productId}`}
              className="relative block w-full overflow-hidden pb-[100%]"
            >
              <Image
                src={w.product?.attachment?.url || ""}
                alt=""
                className="rounded-md aspect-square w-full h-full absolute inset-0 group-hover:scale-105 object-contain"
                width={400}
                height={400}
                quality={100}
                key={w._id}
              />
            </Link>
          </div>
          <div className="p-2 md:p-4 border-neutral-200 text-sm">
            <Link
              href={`/product/${w.productId}`}
              className="hover:text-primary line-clamp-2"
            >
              {w.product?.name}
            </Link>
            <div className="flex gap-2 flex-col pt-3">
              <Button className="w-full" variant="outline" asChild>
                <Link href={`/product/${w.productId}`}>
                  Detail
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Delete productId={w.productId} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Wishlist;
