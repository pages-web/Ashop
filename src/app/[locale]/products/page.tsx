import Link from "next/link";

const categories = ["All Products", "iPhone", "Mac", "iPad", "Accessories"];
const priceRanges = ["Under $500", "$500 - $1000", "$1000 - $2000", "Over $2000"];

const products = [
  { id: 1, name: "iPhone 15 Pro", price: "$999", image: "/placeholder.svg" },
  { id: 2, name: "MacBook Air M3", price: "$1,099", image: "/placeholder.svg" },
  { id: 3, name: "iPad Pro M4", price: "$999", image: "/placeholder.svg" },
  { id: 4, name: "AirPods Pro", price: "$249", image: "/placeholder.svg" },
  { id: 5, name: "Apple Watch", price: "$399", image: "/placeholder.svg" },
  { id: 6, name: "AirTag", price: "$29", image: "/placeholder.svg" },
  { id: 7, name: "Magic Keyboard", price: "$299", image: "/placeholder.svg" },
  { id: 8, name: "HomePod", price: "$299", image: "/placeholder.svg" },
];

export default function ProductsPage() {
  return (
    <div className="flex gap-12 px-12 py-12">
      <aside className="w-64 flex-shrink-0">
        <h2 className="text-xl font-semibold text-[#111111] mb-8">Filters</h2>
        
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-[#111111] mb-4">Category</h3>
          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <span key={cat} className="text-sm text-[#666666] cursor-pointer hover:text-[#111111]">
                {cat}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-semibold text-[#111111] mb-4">Price Range</h3>
          <div className="flex flex-col gap-2">
            {priceRanges.map((range) => (
              <span key={range} className="text-sm text-[#666666] cursor-pointer hover:text-[#111111]">
                {range}
              </span>
            ))}
          </div>
        </div>
      </aside>
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-[#111111]">All Products</h1>
          <span className="text-sm text-[#666666]">Sort by: Featured</span>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="group cursor-pointer">
                <div className="w-full h-[240px] bg-[#f5f5f7] rounded-xl mb-3">
                  <div className="w-full h-full bg-gray-200 rounded-xl" />
                </div>
                <h3 className="text-base font-semibold text-[#111111]">{product.name}</h3>
                <p className="text-sm text-[#333333]">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          <button className="px-3 py-2 bg-[#111111] text-white rounded-md text-sm">1</button>
          <button className="px-3 py-2 bg-[#f5f5f7] text-[#333333] rounded-md text-sm">2</button>
          <button className="px-3 py-2 bg-[#f5f5f7] text-[#333333] rounded-md text-sm">3</button>
          <button className="px-3 py-2 text-[#0066cc] text-sm">Next</button>
        </div>
      </div>
    </div>
  );
}
