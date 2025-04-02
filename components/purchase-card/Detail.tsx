"use client";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useCDWishlist } from "@/sdk/hooks/ecommerce";
import { LoadingIcon } from "../ui/loading";
import Link from "next/link";

const HeartPlusIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("relative", className)}>
      <svg
        width="48"
        height="32"
        viewBox="0 0 24 23"
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.001 21.349C-8.0009 10.355 6.1561 -3.217 12.001 4.248 17.846 -3.217 32.001 10.355 12.001 21.349Z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 rounded-full flex items-center justify-center">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="black">
          <path d="M12 5v14M5 12h14" stroke="black" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

const WhisListCard = ({
  detail,
  productId,
}: {
  detail?: boolean;
  productId: string;
}) => {
  const { handleClick, loading, wishList, erxesCustomerId } =
    useCDWishlist(productId);
  return (
    <div>
      <Button
        size={detail ? "default" : "icon"}
        className={cn(
          "bg-transparent mr-5 bg-white shadow-none hover:bg-gray-300 w-32 h-10 rounded-2xl",
          detail && "static items-center px-3 "
        )}
        onClick={handleClick}
        disabled={loading || (!!erxesCustomerId && !wishList)}
      >
        {loading ? (
          <LoadingIcon
            className={cn("h-4.5 w-4.5", detail ? "mr-1.5" : "mr-0")}
          />
        ) : (
          <>
            <HeartPlusIcon />
          </>
        )}
        <p className="text-black">Хадгалах</p>
      </Button>
    </div>
  );
};

export default WhisListCard;
