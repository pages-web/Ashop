import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useCDWishlist } from "@/sdk/hooks/ecommerce";
import { LoadingIcon } from "@/components/ui/loading";

const Delete = ({ productId }: { productId: string }) => {
  const { handleClick, loading } = useCDWishlist(productId);
  return (
    <Button
      className="w-full bg-destructive hover:bg-destructive/90"
      disabled={loading}
      onClick={handleClick}
    >
      Устгах
      {loading ? (
        <LoadingIcon className="mr-0 ml-1 h-4 w-4" />
      ) : (
        <Trash className="h-4 w-4 ml-1" />
      )}
    </Button>
  );
};

export default Delete;
