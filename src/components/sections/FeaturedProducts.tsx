import Link from "next/link";

const products = [
  { id: 1, name: "iPhone 15 Pro", price: "$999", image: "/placeholder.svg" },
  { id: 2, name: "MacBook Air M3", price: "$1,099", image: "/placeholder.svg" },
  { id: 3, name: "iPad Pro M4", price: "$999", image: "/placeholder.svg" },
  { id: 4, name: "AirPods Pro", price: "$249", image: "/placeholder.svg" },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-12">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-[#111111]">Featured Products</h2>
        <Link href="/products" className="text-sm text-[#0066cc] hover:underline">
          View All →
        </Link>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="group cursor-pointer">
              <div className="w-full h-[360px] bg-[#f5f5f7] rounded-2xl mb-4 overflow-hidden">
                <div className="w-full h-full bg-gray-200" />
              </div>
              <h3 className="text-lg font-semibold text-[#111111]">{product.name}</h3>
              <p className="text-base text-[#333333]">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
