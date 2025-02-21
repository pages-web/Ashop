import { getConfig } from "@/sdk/queries/auth";
import CategoryItem from "./item";
import { Heading } from "../heading/heading";

export type CategoryCardProps = {
  // You may include your items type here if needed.
};

export async function CategoryCard({ ...attributes }: CategoryCardProps) {
  const { config } = await getConfig();
  if (!(config.initialCategoryIds || []).length) return null;

  return (
    <>
      <Heading title="" />
      <div className="container " {...attributes}>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {(config.initialCategoryIds || []).map(
            (_id: string, index: number) => (
              <div
                key={_id}
                className={`${index >= 8 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <CategoryItem
                  id={_id}
                  length={config.initialCategoryIds.length}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
