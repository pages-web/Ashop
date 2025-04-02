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
    <div>
      <Link href={`/category?order=${order}`} aria-label={name}>
        <div className="">
          <div className="relative pb-[60%] mr-0">
            <Image
              src={attachment?.url || ""}
              alt={name}
              className="rounded-3xl"
              skipAnimation
            />
          </div>
        </div>

        <div className="flex justify-center">
          <p
            className={cn(
              "font-semibold no-underline text-base text-center group-hover:underline group-hover:text-primary",
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
