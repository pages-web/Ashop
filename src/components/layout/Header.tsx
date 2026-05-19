import Link from "next/link";
import { useTranslations } from "next-intl";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#e8e8ed]">
      <div className="flex h-[52px] items-center justify-between px-12">
        <Link href="/" className="text-[22px] font-bold text-[#111111]">
          Ashop
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link href="/products" className="text-sm text-[#333333] hover:text-[#111111] transition-colors">
            {t("nav.products")}
          </Link>
          <Link href="/about" className="text-sm text-[#333333] hover:text-[#111111] transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="/blog" className="text-sm text-[#333333] hover:text-[#111111] transition-colors">
            {t("nav.blog")}
          </Link>
          <Link href="/contact" className="text-sm text-[#333333] hover:text-[#111111] transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="flex items-center gap-2 bg-[#111111] text-white px-3 py-1.5 rounded-full text-sm">
            <ShoppingCart className="w-4 h-4" />
            <span>0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
