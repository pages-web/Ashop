import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-[#f5f5f7]">
      <h1 className="text-7xl font-bold text-[#1d1d1f] mb-4">Ashop.</h1>
      <p className="text-2xl text-[#86868b] mb-8">
        Your favorite products. All in one place.
      </p>
      <div className="flex gap-6">
        <Link
          href="/products"
          className="flex items-center gap-2 text-[#0066cc] hover:underline text-lg"
        >
          Shop Now <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="/about"
          className="flex items-center gap-2 text-[#0066cc] hover:underline text-lg"
        >
          Learn more <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
