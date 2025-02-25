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
        <div className="relative mx-auto max-sm:bottom-[300px]">
          <div className="w-full h-0 pb-[100%] relative">
            <Image
              src={attachment?.url || ""}
              alt={name}
              className="absolute inset-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full object-cover custom-hover hover:scale-x-110 hover:scale-y-110 duration-200"
              skipAnimation
            />
          </div>
        </div>

        <div className="flex justify-center relative max-sm:bottom-[300px]">
          <p
            className={cn(
              "mt-4 font-semibold no-underline text-base group-hover:underline group-hover:text-primary group-hover:font-normal group-active:text-primary max-w-40 text-center",
              length > 5 && "font-medium text-sm"
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
