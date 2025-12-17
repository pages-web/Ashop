import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import OrderProduct from "../profile/order/order-product";
import { useDetail } from "./order-detail";
import { useAtomValue } from "jotai";
import { configAtom } from "@/store/auth.store";
import { filterDeliveryProduct } from "@/store/order.store";

const OrderProducts = () => {
  const { items } = useDetail();
  const { deliveryProducts } = useAtomValue(configAtom) || {};
  return (
    <Card>
      <CardHeader className="md:py-4">
        <CardTitle className="text-lg font-semibold">Бүтээгдэхүүнүүд</CardTitle>
      </CardHeader>
      <Separator />
      {filterDeliveryProduct(items, deliveryProducts).map((item) => (
        <OrderProduct {...item} key={item._id} />
      ))}
    </Card>
  );
};

export default OrderProducts;
