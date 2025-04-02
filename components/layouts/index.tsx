import { NavbarTop } from "./navbar-top";
import { Button } from "../ui/button";
import Search from "../search/search";
import BottomNav from "../bottom-nav/bottom-nav";
import ScrollToTop from "../scroll-to-top/scroll-to-top";
import Footer from "../footer/footer";
import Link from "next/link";
import CartTrigger from "../cart/cart-trigger";
import CurrentUser from "@/containers/auth/current-user";
import { Suspense } from "react";
import NavWish from "../purchase-card/navwhish";

const DefaultLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NavbarTop>
        <Button
          variant="ghost"
          className="hover:bg-background/10 hover:text-white sm:flex hidden"
          asChild
        >
          <Link href={"/category"}>Дэлгүүр</Link>
        </Button>
        <Suspense fallback={<div className="flex-1" />}>
          <Search className="flex-1 max-w-full sm:max-w-2xl sm:mr-auto" />
        </Suspense>
        <nav className="flex gap-2 sm:gap-4 items-center">
          <Link href="/profile/wishlist">
            <NavWish productId={""} />
          </Link>
          <CartTrigger />
          <p className="hidden sm:block">Сагс</p>
          <CurrentUser />
          <p className="hidden sm:block">Профайл</p>
        </nav>
      </NavbarTop>
      {children}
      <ScrollToTop />
      <Suspense>
        <BottomNav />
      </Suspense>
      <Footer />
    </>
  );
};

export default DefaultLayout;
