"use client";
import { configAtom } from "@/store/auth.store";
import { IConfig } from "@/types/auth.types";
import { useSetAtom } from "jotai";
import { useLayoutEffect } from "react";
import { IProduct } from "@/types/product.types";

const ConfigProvider = ({
  children,
  config,
  deliveryProducts,
}: React.PropsWithChildren & {
  config: IConfig;
  deliveryProducts?: IProduct[];
}) => {
  const setConfig = useSetAtom(configAtom);

  const { deliveryConfig, erxesAppToken, paymentIds, name, isCheckRemainder } =
    config || {};
  console.log("del", deliveryProducts);
  useLayoutEffect(() => {
    setConfig({
      deliveryConfig,
      erxesAppToken,
      paymentIds,
      name,
      isCheckRemainder,
      deliveryProducts,
    });
  }, []);

  return <>{children}</>;
};

export default ConfigProvider;
