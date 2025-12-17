import { cn } from "@/lib/utils";
import { TagIcon } from "lucide-react";

export const ProductDiscount = ({
  children,
  discountAmount,
  unitPrice,
  className,
}: {
  children: React.ReactNode;
  discountAmount: number;
  unitPrice: number;
  className?: string;
}) => {
  return (
    <div className={cn("relative overflow-hidden rounded-md", className)}>
      {children}
      {(discountAmount || 0) > 0 && (
        <div className="absolute top-0 left-0 text-white bg-indigo-600 py-1 pl-1.5 pr-2 text-xs font-medium inline-flex items-center">
          <TagIcon className="mr-1 h-3 w-3" />
          {(
            ((discountAmount || 0) / (unitPrice + (discountAmount || 0))) *
            100
          ).toFixed(1)}
          % Sale
        </div>
      )}
    </div>
  );
};
