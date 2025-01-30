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
      <CarouselContent className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {data.pricingPlans.map((item: any, index: number) => (
          <CarouselItem
            className="flex-shrink-0 w-full p-2"
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
