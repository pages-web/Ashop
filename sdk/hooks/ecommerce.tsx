import { useMutation, useQuery } from "@apollo/client";
import mutations from "@/sdk/graphql/ecommerce/mutations";
import { queries } from "../graphql/ecommerce";
import { useAtomValue } from "jotai";
import { currentUserAtom } from "@/store/auth.store";
import { toast } from "sonner";
import { wishlistAtom } from "@/store/ecommerce.store";
import { useRouter } from "next/navigation";

export const useAddReview = () => {
  const [addReview, { loading: adding }] = useMutation(
    mutations.productReviewAdd
  );
  const [updateReview, { loading: updating }] = useMutation(
    mutations.productReviewUpdate
  );
  const [removeReview, { loading: removing }] = useMutation(
    mutations.productReviewRemove
  );

  return {
    addReview,
    updateReview,
    removeReview,
    loading: adding || updating || removing,
  };
};

export const useCDWishlist = (productId: string) => {
  const router = useRouter();
  const { erxesCustomerId } = useAtomValue(currentUserAtom) || {};
  const wishList = useAtomValue(wishlistAtom);

  const wish = wishList?.find((w) => w.productId === productId);
  const [addWishlist, { loading: adding }] = useMutation(
    mutations.wishlistAdd,
    {
      variables: {
        customerId: erxesCustomerId,
        productId,
      },
      onCompleted() {
        toast.success("Хадгалсан");
      },
      refetchQueries: ["wishlist"],
    }
  );

  const [removeWishlist, { loading: removing }] = useMutation(
    mutations.wishlistRemove,
    {
      variables: {
        _id: wish?._id,
      },
      onCompleted() {
        toast.success("Устгах");
      },
      refetchQueries: ["wishlist"],
    }
  );

  const handleClick = () => {
    toast.dismiss();
    if (!erxesCustomerId) {
      return toast.info("Эхлээд нэвтэрнэ үү", {
        action: {
          label: "Login",
          onClick: () => {
            router.push("/login");
            toast.dismiss();
          },
        },
      });
    }

    if (!wish) {
      return addWishlist();
    }
    removeWishlist();
  };

  return {
    erxesCustomerId,
    wishList,
    wish,
    handleClick,
    loading: adding || removing,
  };
};
