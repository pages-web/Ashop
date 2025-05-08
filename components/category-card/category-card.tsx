import { getConfig } from "@/sdk/queries/auth";
import CategoryItem from "./item";

export type CategoryCardProps = {};

export async function CategoryCard({ ...attributes }: CategoryCardProps) {
  const { config } = await getConfig();
  const ids: string[] = config?.initialCategoryIds || [];

  if (!ids.length) return null;

  return (
    <div className="container" {...attributes}>
      <div className="md:grid md:grid-cols-3 md:gap-4 md:justify-items-center">
        <div className="flex w-full justify-center md:col-span-3 gap-5">
          {ids.slice(0, 3).map((id: string) => (
            <div key={id} className="w-full max-w-xs">
              <CategoryItem id={id} length={ids.length} />
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center md:col-span-3">
          {ids.slice(3, 5).map((id: string) => (
            <div key={id} className="w-full max-w-xs h-40">
              <CategoryItem id={id} length={ids.length} />
            </div>
          ))}
        </div>
        {ids[5] && (
          <div className="flex w-full justify-center md:col-span-1 md:col-start-2">
            <div className="w-full max-w-xs h-40">
              <CategoryItem id={ids[5]} length={ids.length} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
