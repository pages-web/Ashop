import { getProducts } from "@/sdk/queries/products";
import ProductCard from "../product-card/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { IProduct } from "@/types/product.types";
import { cn } from "@/lib/utils";

const RecommendedProducts = async ({
  categoryId,
  productId,
}: {
  categoryId?: string;
  productId?: string;
}) => {
  const { products } = await getProducts({
    variables: {
      categoryId,
      perPage: 12,
      isKiosk: true,
      groupedSimilarity: "config",
    },
  });
  const exceptCurrent = products.filter((product) => product._id !== productId);

  if (!exceptCurrent.length) return null;

  return (
    <Carousel opts={{ dragFree: true }}>
      <CarouselContent>
        {exceptCurrent.map((product: IProduct) => (
          <CarouselItem
            className="basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/4 2xl:basis-1/5"
            key={product._id}
          >
            <ProductCard
              {...product}
              className={cn(product.hasSimilarity && "pb-8")}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 sm:left-6 lg:left-8 sm:inline-flex" />
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 sm:right-6 lg:right-8 sm:inline-flex" />
    </Carousel>
  );
};

export default RecommendedProducts;
