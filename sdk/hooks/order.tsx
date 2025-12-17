import {
  type ApolloError,
  useMutation,
  BaseMutationOptions,
  useQuery,
} from "@apollo/client";
import { mutations, queries } from "../graphql/order";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  activeOrderAtom,
  couponCodeAtom,
  cudOrderAtom,
  filterDeliveryProduct,
  isVerifyingAtom,
  loadingOrderAtom,
  orderParamsAtom,
  voucherIdAtom,
} from "@/store/order.store";
import { useEffect } from "react";
import { toast } from "sonner";
import { IOrder, IVoucher } from "@/types/order.types";
import { ORDER_SALE_STATUS } from "@/lib/constants";
import { onError } from "@/lib/utils";
import { configAtom } from "@/store/auth.store";
import { useCurrentUser } from "../queries/auth.client";

const refetchQueries = ["CurrentOrder"];

export const useOrderCUD = () => {
  const params = useAtomValue(orderParamsAtom);
  const [triggerCUDOrder, changeTrigger] = useAtom(cudOrderAtom);
  const setLoading = useSetAtom(loadingOrderAtom);
  const { _id, items } = params;
  const { deliveryProducts } = useAtomValue(configAtom) || {};
  const setCouponCode = useSetAtom(couponCodeAtom);
  const setVoucherId = useSetAtom(voucherIdAtom);
  const productItems = filterDeliveryProduct(items, deliveryProducts);

  const onError = (error: ApolloError) => {
    setLoading(false);
    changeTrigger(false);
    if (error.message.includes("Invalid coupon code")) {
      setCouponCode(null);
    }
    if (error.message.includes("Invalid voucher")) {
      setVoucherId(null);
    }
    toast.error(error.message);
  };

  const [add] = useMutation(mutations.ordersAdd, {
    onError,
    refetchQueries,
  });
  const [edit] = useMutation(mutations.ordersEdit, {
    onError,
    refetchQueries,
  });

  const [remove] = useMutation(mutations.ordersCancel, {
    onError,
    refetchQueries,
  });

  useEffect(() => {
    if (triggerCUDOrder) {
      setLoading(true);
      if (_id) {
        if (productItems.length > 0) {
          edit({ variables: params });
        } else {
          remove({
            variables: params,
          });
        }
      } else {
        add({
          variables: params,
        });
      }
    }
  }, [triggerCUDOrder]);

  return {};
};

export const useOrderChangeSaleStatus = () => {
  const { _id } = useAtomValue(activeOrderAtom) as IOrder;
  const setIsVerifying = useSetAtom(isVerifyingAtom);
  const [change, { loading }] = useMutation(mutations.orderChangeSaleStatus, {
    refetchQueries,
    onError(error) {
      onError(error);
      setIsVerifying(false);
    },
  });

  const handleConfirm = (onCompleted?: BaseMutationOptions["onCompleted"]) => {
    setIsVerifying(true);
    change({
      variables: {
        _id,
        saleStatus: ORDER_SALE_STATUS.CONFIRMED,
      },
      onCompleted(data) {
        onCompleted && onCompleted(data);
        setTimeout(() => setIsVerifying(false), 300);
      },
    });
  };

  return { handleConfirm, loading };
};

export const useCancelOrder = () => {
  const [cancel, { loading }] = useMutation(mutations.ordersCancel, {
    onError,
  });

  return { cancel, loading };
};

export const useOwnerVouchers = () => {
  const { currentUser } = useCurrentUser();
  const { data, loading } = useQuery<{
    ownerVouchers: IVoucher[];
  }>(queries.ownerVouchers, {
    onError,
    variables: {
      ownerId: currentUser?._id,
    },
  });
  const ownerVouchers = data?.ownerVouchers;

  return { ownerVouchers, loading };
};
