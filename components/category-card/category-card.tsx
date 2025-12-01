import * as React from "react";
import { getConfig } from "@/sdk/queries/auth";
import { ICategory } from "@/types/products.types";
import { Heading } from "../heading/heading";
import CategoryItem from "./item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CategoryWithImage extends ICategory {
  image: string;
}

export type CategoryCardProps = {};

export async function CategoryCard({ ...attributes }: CategoryCardProps) {
  const { config } = await getConfig();

  if (!(config.initialCategoryIds || []).length) return null;

  return (
    <div className="container mt-16 md:mt-2">
      <Heading title="Онцлох ангилалууд" className="md:mt-16 md:mb-8" />

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mb-10 md:mb-16"
      >
        <CarouselContent>
          {(config.initialCategoryIds || []).map((_id: string) => (
            <CarouselItem
              key={_id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <CategoryItem
                id={_id}
                length={config.initialCategoryIds.length}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
