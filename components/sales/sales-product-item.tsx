import { queries } from "@/sdk/graphql/products";
import { useQuery } from "@apollo/client";
import React from "react";
import SaleProduct from "../product-card/saleProduct";

export default function SalesProductItem({
  products,
  value,
}: {
  value: number;
  products: string[];
}) {
  const { data, loading } = useQuery(queries?.productDetail, {
    variables: {
      _id: products?.[0],
    },
    skip: !products?.[0],
  });

  if (products?.length === 0) return null;
  if (loading) return null;
  return <SaleProduct {...data?.poscProductDetail} discountValue={value} />;
}