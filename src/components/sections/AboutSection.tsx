import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 px-12 bg-[#f8f9fa]">
      <div className="flex items-center gap-16 max-w-6xl mx-auto">
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#0066cc] tracking-wider mb-4">ABOUT US</p>
          <h2 className="text-4xl font-bold text-[#111111] mb-6">Your Trusted Tech Partner</h2>
          <p className="text-base text-[#666666] mb-6">
            We carefully select every product in our store to ensure you get only the best technology. 
            From the latest smartphones to powerful laptops, we've got you covered.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 text-[#0066cc] hover:underline">
            Read Our Story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="w-[500px] h-[400px] bg-[#e8e8ed] rounded-2xl">
          <div className="w-full h-full bg-gray-300 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
