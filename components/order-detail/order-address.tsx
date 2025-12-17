import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";
import { useDetail } from "./order-detail";
import OrderDescription from "../order-description";

const OrderAddress = () => {
  const { deliveryInfo, type, description } = useDetail();
  const { phone, district, street, email } = deliveryInfo || {};
  if (type === "take") {
    return (
      <Card>
        <CardHeader className="md:py-4">
          <CardTitle className="tex -lg font-semibold">{"take"}</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="flex items-center md:justify-between text-sm flex-wrap md:flex-nowrap gap-4 py-4">
          <div>
            <div className="text-foreground/60">{"Pick up date"}</div>
            <div className="font-medium"></div>
          </div>
          <div>
            <div className="text-foreground/60">{"Pick up time"}</div>
            <div className="font-medium"></div>
          </div>
          <div>
            <div className="text-foreground/60">Очиж авах хаяг</div>
            <div className="font-medium">{"TakeAddress"}</div>
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card>
      <CardHeader className="md:py-4">
        <CardTitle className="text-lg font-semibold">Хүргэлтийн хаяг</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="flex items-center md:justify-between text-sm flex-wrap md:flex-nowrap gap-4 py-4">
        <div className="flex-1">
          <div className="text-foreground/60">Хүргэлтийн мэдээлэл</div>
          <div className="font-medium">
            <OrderDescription
              district={district}
              street={street}
              detail={description}
            />
          </div>
        </div>

        <div>
          <div className="text-foreground/60">{"Утасны дугаар"}</div>
          <div className="font-medium">{phone}</div>
        </div>
        <div>
          <div className="text-foreground/60">{"И-Мэйл хаяг"}</div>
          <div className="font-medium">{email}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderAddress;
