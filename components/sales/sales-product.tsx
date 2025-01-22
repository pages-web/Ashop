"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

import { useQuery } from "@apollo/client";
import { queries } from "@/sdk/graphql/products";
import SalesProductItem from "./sales-product-item";

const RecommendedProducts = ({
  categoryId,
  productId,
}: {
  categoryId?: string;
  productId?: string;
}) => {
  const { data, loading, error } = useQuery(queries?.getSalesProducts, {
    variables: {
      status: "active",
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent>
        {data.pricingPlans.map((item: any, index: number) => (
          <CarouselItem
            className="basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/6"
            key={index}
          >
            <SalesProductItem products={item.products} value={item.value} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default RecommendedProducts;