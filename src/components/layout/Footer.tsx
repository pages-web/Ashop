import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#e8e8ed]">
      <div className="px-12 py-16">
        <div className="flex justify-between gap-20">
          <div className="w-[300px]">
            <h3 className="text-lg font-bold text-[#111111] mb-4">Ashop</h3>
            <p className="text-sm text-[#666666]">
              Premium technology products for the modern lifestyle.
            </p>
          </div>
          
          <div className="flex gap-20">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold text-[#111111]">Shop</h4>
              <Link href="/products" className="text-sm text-[#666666] hover:text-[#111111]">All Products</Link>
              <Link href="/products" className="text-sm text-[#666666] hover:text-[#111111]">New Arrivals</Link>
              <Link href="/products" className="text-sm text-[#666666] hover:text-[#111111]">Best Sellers</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold text-[#111111]">Support</h4>
              <Link href="/contact" className="text-sm text-[#666666] hover:text-[#111111]">Contact Us</Link>
              <Link href="/contact" className="text-sm text-[#666666] hover:text-[#111111]">FAQ</Link>
              <Link href="/contact" className="text-sm text-[#666666] hover:text-[#111111]">Shipping Info</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold text-[#111111]">Company</h4>
              <Link href="/about" className="text-sm text-[#666666] hover:text-[#111111]">About Us</Link>
              <Link href="/blog" className="text-sm text-[#666666] hover:text-[#111111]">Blog</Link>
              <Link href="/contact" className="text-sm text-[#666666] hover:text-[#111111]">Careers</Link>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#e8e8ed]">
          <p className="text-xs text-[#999999]">© 2024 Ashop. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-xs text-[#999999]">Privacy Policy</span>
            <span className="text-xs text-[#999999]">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
