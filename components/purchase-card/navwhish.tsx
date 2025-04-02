"use client";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useCDWishlist } from "@/sdk/hooks/ecommerce";

const HeartPlusIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("relative", className)}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21C8.2 17.8 2 12.1 2 8.1C2 5.4 4.3 3 7 3C8.5 3 10 4 12 6C14 4 15.5 3 17 3C19.7 3 22 5.4 22 8.1C22 12.1 15.8 17.8 12 21Z"
          stroke="#fff"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

const NavWish = ({
  detail,
  productId,
}: {
  detail?: boolean;
  productId: string;
}) => {
  const { handleClick } = useCDWishlist(productId);
  return (
    <div>
      <Button
        size={detail ? "default" : "icon"}
        onClick={handleClick}
        className="bg-transparent p-0"
      >
        <HeartPlusIcon className="text-white" />
      </Button>
    </div>
  );
};

export default NavWish;
