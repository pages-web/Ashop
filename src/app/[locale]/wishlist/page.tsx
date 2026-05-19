"use client";

import Link from "next/link";

const wishlistItems = [
  { id: 1, name: "iPhone 15 Pro", price: "$999" },
  { id: 2, name: "MacBook Air M3", price: "$1,099" },
  { id: 3, name: "iPad Pro M4", price: "$999" },
];

export default function WishlistPage() {
  return (
    <div className="px-12 py-12">
      <h1 className="text-3xl font-bold text-[#111111] mb-8">My Wishlist</h1>
      
      <div className="grid grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="relative">
            <div className="w-full h-[360px] bg-[#f5f5f7] rounded-2xl mb-4">
              <div className="w-full h-full bg-gray-200 rounded-2xl" />
              <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#ff3b30]">
                X
              </button>
            </div>
            <h3 className="text-lg font-semibold text-[#111111]">{item.name}</h3>
            <p className="text-base text-[#333333] mb-4">{item.price}</p>
            <button className="w-full py-3 bg-[#111111] text-white rounded-lg font-medium">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
