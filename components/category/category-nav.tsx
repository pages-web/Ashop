"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { ICategory } from "@/types/products.types";
import Link from "next/link";
import { useState } from "react";

export function CategoryNav({
  categories,
  primaryCategories,
}: {
  categories: ICategory[];
  primaryCategories: ICategory[];
}) {
  const [activeCat, setActiveCat] = useState<string | undefined>();

  const getChildren = (parentId: string) =>
    categories.filter((c) => c.parentId === parentId);

  const onLinkClick = () => setActiveCat(undefined);

  return (
    <NavigationMenu
      className="-mx-4 flex-auto max-w-full 2xl:max-w-screen-2xl justify-start [&>div]:max-w-full"
      value={activeCat}
      onValueChange={setActiveCat}
    >
      <NavigationMenuList className="max-w-full overflow-x-auto justify-start no-scrollbar">
        {(primaryCategories || []).map(({ _id, name, order }) => {
          const childrenCats = getChildren(_id);

          if (childrenCats.length === 0)
            return (
              <NavigationMenuItem key={_id}>
                <Link
                  href={{ pathname: "/category", query: { order: order } }}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );

          return (
            <NavigationMenuItem key={_id} value={_id}>
              <NavigationMenuTrigger>
                <Link href={{ pathname: "/category", query: { order: order } }}>
                  {name}
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="lg:w-full">
                <div className="p-4 text-sm pb-8">
                  <LinkItem
                    order={order}
                    className="font-normal"
                    onClick={onLinkClick}
                  ></LinkItem>
                  <ul className="grid grid-cols-3 xl:grid-cols-1 gap-2 w-full">
                    {childrenCats.map((cat) => (
                      <li key={cat._id}>
                        {getChildren(cat._id).map((c) => (
                          <LinkItem
                            className="flex justify-start hover:bg-yellow-400 w-60 relative bottom-[50px] font-semibold"
                            key={c._id}
                            order={c.order}
                            onClick={onLinkClick}
                          >
                            {c.name}
                          </LinkItem>
                        ))}
                        <LinkItem
                          className="flex h-6 py-0 justify-start  hover:bg-yellow-400 w-60 relative bottom-[50px] font-semibold"
                          order={cat.order}
                          onClick={onLinkClick}
                        >
                          {cat.name}
                        </LinkItem>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const LinkItem = ({
  onClick,
  children,
  order,
  className,
}: React.PropsWithChildren & {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  order: string;
  className: string;
}) => (
  <Button variant="link" asChild className={className}>
    <Link
      href={{ pathname: "/category", query: { order: order } }}
      onClick={onClick}
    >
      {children}
    </Link>
  </Button>
);
