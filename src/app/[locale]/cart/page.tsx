"use client";

import Link from "next/link";

const cartItems = [
  { id: 1, name: "iPhone 15 Pro", variant: "256GB - Natural Titanium", price: "$999", qty: 1 },
  { id: 2, name: "AirPods Pro", variant: "White", price: "$249", qty: 1 },
];

export default function CartPage() {
  return (
    <div className="flex gap-12 px-12 py-12">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[#111111] mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-6 py-4">
              <div className="w-[120px] h-[120px] bg-[#f5f5f7] rounded-xl">
                <div className="w-full h-full bg-gray-200 rounded-xl" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#111111]">{item.name}</h3>
                <p className="text-sm text-[#666666]">{item.variant}</p>
                <p className="text-base text-[#111111]">{item.price}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 bg-[#f5f5f7] rounded-md flex items-center justify-center">-</button>
                <span className="text-base">{item.qty}</span>
                <button className="w-8 h-8 bg-[#f5f5f7] rounded-md flex items-center justify-center">+</button>
              </div>
              
              <button className="text-sm text-[#ff3b30]">Remove</button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-[400px]">
        <div className="bg-[#f5f5f7] rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-[#111111] mb-6">Order Summary</h2>
          
          <div className="flex justify-between mb-3">
            <span className="text-sm text-[#666666]">Subtotal</span>
            <span className="text-sm text-[#111111]">$1,248</span>
          </div>
          
          <div className="flex justify-between mb-3">
            <span className="text-sm text-[#666666]">Shipping</span>
            <span className="text-sm text-[#34c759]">Free</span>
          </div>
          
          <div className="flex justify-between mb-6 pt-4 border-t border-[#e8e8ed]">
            <span className="text-lg font-semibold text-[#111111]">Total</span>
            <span className="text-lg font-semibold text-[#111111]">$1,248</span>
          </div>
          
          <Link href="/checkout">
            <button className="w-full py-3 bg-[#111111] text-white rounded-lg font-medium">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
