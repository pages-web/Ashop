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
    <div className="flex flex-col items-center">
      <Link href={`/category?order=${order}`} aria-label={name}>
        <div className="group">
          <div className="relative aspect-[4/3] max-w-[200px] w-full">
            <Image
              src={attachment?.url || ""}
              alt={name}
              className="rounded-xl object-cover"
              style={{ objectFit: "cover" }}
              width={150}
              height={150}
              skipAnimation
            />
          </div>

          <div className="flex justify-center mt-2">
            <p
              className={cn(
                "font-semibold no-underline text-base text-center group-hover:underline group-hover:text-primary",
                length > 20 ? "text-sm" : "text-base"
              )}
            >
              {name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
