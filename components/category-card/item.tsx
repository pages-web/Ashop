import Link from "next/link";
import Image from "../ui/image";
import { getCategories } from "@/sdk/queries/products";
import { cn } from "@/lib/utils";

const CategoryItem = async ({ id, length }: { id: string; length: number }) => {
  const { categories } = await getCategories();
  const category = categories.find((cat) => cat._id === id);

  if (!category) return null;

  const { order, attachment, name } = category;

  return (
    <div className="container">
      <Link href={`/category?order=${order}`} aria-label={name}>
        <div className="relative mx-auto">
          <div className="w-full h-0 pb-[100%] relative">
            <Image
              src={attachment?.url || ""}
              alt={name}
              className={cn(
                "absolute inset-0 rounded-full object-cover custom-hover hover:scale-110 duration-200",
                length <= 20
                  ? "w-16 h-16 sm:w-32 sm:h-32 md:w-40 md:h-40"
                  : "w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
              )}
              skipAnimation
            />
          </div>
        </div>

        <div className="flex justify-center">
          <p
            className={cn(
              "mt-4 font-semibold no-underline text-base text-center group-hover:underline group-hover:text-primary",
              length > 20 ? "text-sm" : "text-base"
            )}
          >
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
