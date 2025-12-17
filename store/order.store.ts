import {
  IDeliveryInfo,
  IOrder,
  IBillType,
  IOrderType,
  IAddress,
} from "@/types/order.types";
import { atom } from "jotai";
import { focusAtom } from "jotai-optics";
import { splitAtom } from "jotai/utils";
import { cartTotalAtom } from "./cart.store";
import { configAtom, currentUserAtom, deliveryItemIdAtom } from "./auth.store";
import { format, formatISO, setHours, setMinutes } from "date-fns";
import { IProduct } from "@/types/product.types";
import { getCharge } from "@/lib/getAddress";

export const defaultOrderItem = {
  items: [],
  deliveryInfo: null,
  description: "",
  type: "delivery",
};
export const activeOrderAtom = atom<
  | IOrder
  | {
      items: [];
      deliveryInfo: null;
      description: string;
      billType: IBillType;
      registerNumber?: string;
      type?: IOrderType;
      dueDate?: string;
      couponCode: string | null;
      voucherId: string | null;
      rawTotalAmount: number;
      totalAmount: number;
    }
>({
  items: [],
  deliveryInfo: null,
  description: "",
  billType: IBillType.person,
  registerNumber: "",
  dueDate: "",
  couponCode: null,
  voucherId: null,
  rawTotalAmount: 0,
  totalAmount: 0,
});

export const orderParamsAtom = atom((get) => {
  const {
    registerNumber,
    billType,
    type,
    description,
    deliveryInfo,
    branchId,
    _id,
    saleStatus,
    dueDate,
    couponCode,
    voucherId,
  } = get(activeOrderAtom) as IOrder;
  const totalAmount = get(cartTotalAtom);
  const customerId = get(currentUserAtom)?.erxesCustomerId;
  const productItems = get(productItemsAtom);
  let itemsNew = productItems;
  if (deliveryInfo) {
    const productItems = get(productItemsAtom);
    const config = get(configAtom);
    const productsTotal = get(itemsTotalAtom);
    const charge =
      getCharge({
        totalAmount: productsTotal,
        district: deliveryInfo.district,
        subdistrict: deliveryInfo.street,
      }) || 0;

    if (charge > 0) {
      const deliveryProduct = config?.deliveryProducts?.find(
        (pr) => pr.unitPrice === charge
      );
      if (deliveryProduct && type === "delivery") {
        itemsNew = [
          ...productItems,
          {
            _id: Math.random().toString(),
            productId: deliveryProduct._id,
            count: 1,
            unitPrice: charge,
            productName: charge.toString(),
          },
        ];
      }
    }
  }

  return {
    _id,
    items: itemsNew.map(({ _id, count, productId, unitPrice }) => ({
      _id,
      count,
      productId,
      unitPrice,
    })),
    totalAmount,
    type: type || "delivery",
    dueDate: dueDate || undefined,
    customerId,
    registerNumber,
    billType,
    origin: "kiosk",
    deliveryInfo,
    description,
    branchId,
    saleStatus,
    couponCode,
    voucherId,
  };
});

export const initialLoadingOrderAtom = atom<boolean>(true);
export const loadingOrderAtom = atom<boolean>(false);

export const cudOrderAtom = atom<boolean>(false);

export const itemsAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("items")
);

export const filterDeliveryProduct = (
  items: IOrder["items"],
  deliveryProducts?: IProduct[]
) =>
  items.filter(
    (item) =>
      !(deliveryProducts || [])
        .map((product) => product._id)
        .includes(item.productId)
  );

export const getDeliveryProduct = (
  items: IOrder["items"],
  deliveryProducts?: IProduct[]
) =>
  items.find((item) =>
    (deliveryProducts || []).some((dp) => dp._id === item.productId)
  );

export const productItemsAtom = atom((get) =>
  filterDeliveryProduct(get(itemsAtom), get(configAtom)?.deliveryProducts)
);

export const getDeliveryProductOld = (
  items: IOrder["items"],
  deliveryProductId?: string
) => items.find((item) => item.productId === deliveryProductId);

export const itemsTotalAtom = atom((get) =>
  get(productItemsAtom).reduce(
    (prev, item) => prev + item.unitPrice * item.count,
    0
  )
);

export const deliveryItemAtom = atom((get) =>
  getDeliveryProduct(get(itemsAtom), get(configAtom)?.deliveryProducts)
);

export const deliveryItemAtomOld = atom((get) =>
  getDeliveryProductOld(get(itemsAtom), get(deliveryItemIdAtom))
);

export const billTypeAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("billType")
);

export const typeAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("type")
);

export const dueDateAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("dueDate")
);

export const registerNumberAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("registerNumber")
);

export const deliveryInfoAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("deliveryInfo")
);

export const descriptionAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("description")
);

export const rawTotalAmountAtom = focusAtom(
  activeOrderAtom,
  (optic) => optic.prop("rawTotalAmount") || optic.prop("totalAmount")
);

export const couponCodeAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("couponCode")
);

export const voucherIdAtom = focusAtom(activeOrderAtom, (optic) =>
  optic.prop("voucherId")
);

export const changeDeliveryInfoAtom = atom(
  (get) => get(loadingOrderAtom),
  (
    get,
    set,
    payload: IDeliveryInfo & {
      registerNumber?: string;
      billType: IBillType;
      isTake: boolean;
      address?: Partial<IAddress>;
    }
  ) => {
    const { billType, registerNumber, isTake, address, ...v } = payload;

    const type: IOrderType = isTake ? "take" : "delivery";
    const params = {
      description: `
        Нэр: ${v.firstName},
        ${v.lastName && `Овог: ${v.lastName},`}
        Утасны дугаар: ${v.phone},
        И-Мэйл хаяг: ${v.email},
        Баримт авах: ${billType === "1" ? "Хувь хүн" : registerNumber}
        ${
          !isTake
            ? `Дүүрэг: ${address?.district},
           Хороо: ${address?.street},
           Дэлгэрэнгүй: ${address?.address1},
          ${
            !!(v.haveBaby || v.callBefore || v.onlyAfternoon) //hasahgui
              ? `Нэмэлт Анхааруулга: ${
                  (v.haveBaby ? "Нялх хүүхэдтэй, " : "") +
                  (v.callBefore ? "Хүргэхийн өмнө заавал залгах, " : "") +
                  (v.onlyAfternoon ? "Зөвхөн оройн цагаар хүргэх" : "") //hasahgui
                }`
              : ""
          }`
            : ""
        }
      `,
      deliveryInfo: {
        district: address?.district,
        street: address?.street,
        ...v,
      },
      billType,
      registerNumber: billType === "3" ? registerNumber : "",
      type,
    };

    if (
      get(descriptionAtom) !== params.description ||
      get(registerNumberAtom) !== registerNumber ||
      get(billTypeAtom) !== billType ||
      get(typeAtom) !== type
    ) {
      set(cudOrderAtom, true);
      set(activeOrderAtom, (prev) => ({ ...(prev as IOrder), ...params }));
    }
  }
);

export const changeCouponCodeAtom = atom(
  (get) => get(loadingOrderAtom),
  (get, set, payload: string | null) => {
    set(cudOrderAtom, true);
    set(activeOrderAtom, (prev) => ({
      ...(prev as IOrder),
      couponCode: payload,
    }));
  }
);

export const changeVoucherIdAtom = atom(
  (get) => get(loadingOrderAtom),
  (get, set, payload: string | null) => {
    set(cudOrderAtom, true);
    set(activeOrderAtom, (prev) => ({
      ...(prev as IOrder),
      voucherId: payload,
    }));
  }
);

export const itemAtomsAtom = splitAtom(itemsAtom);
export const isVerifyingAtom = atom(false);

export const showAddressDialogAtom = atom(false);
export const addressDetailAtom = atom<Partial<IAddress> | null>(null);
