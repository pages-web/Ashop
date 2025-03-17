import { getConfig } from "@/sdk/queries/auth";
import CategoryItem from "./item";

export type CategoryCardProps = {
  // You may include your items type here if needed.
};

export async function CategoryCard({ ...attributes }: CategoryCardProps) {
  const { config } = await getConfig();
  if (!config || !(config.initialCategoryIds || []).length) return null;

  return (
    <>
      <div className="container" {...attributes}>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-12 md:mt-40">
          {(config.initialCategoryIds || []).map((_id: string) => (
            <div className="pb-[100%]">
              <CategoryItem
                id={_id}
                length={config.initialCategoryIds.length}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
