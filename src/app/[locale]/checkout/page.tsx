"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [deliveryMethod, setDeliveryMethod] = useState("standard");

  return (
    <div className="flex gap-12 px-12 py-12">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[#111111] mb-8">Checkout</h1>
        
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="text-sm text-[#666666] mb-2 block">First Name</label>
            <input type="text" className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4" />
          </div>
          <div className="flex-1">
            <label className="text-sm text-[#666666] mb-2 block">Last Name</label>
            <input type="text" className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4" />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="text-sm text-[#666666] mb-2 block">Email</label>
          <input type="email" className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4" />
        </div>
        
        <div className="mb-6">
          <label className="text-sm text-[#666666] mb-2 block">Phone</label>
          <input type="tel" className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4" />
        </div>
        
        <div className="mb-6">
          <label className="text-sm text-[#666666] mb-2 block">Address</label>
          <input type="text" className="w-full h-12 bg-[#f5f5f7] rounded-lg px-4" />
        </div>
        
        <div className="mb-8">
          <p className="text-sm font-semibold text-[#111111] mb-4">Delivery Method</p>
          <div className="flex gap-3">
            <button
              onClick={() => setDeliveryMethod("standard")}
              className={`flex-1 p-4 rounded-lg border text-left ${
                deliveryMethod === "standard"
                  ? "border-[#111111] bg-[#f5f5f7]"
                  : "border-[#e8e8ed]"
              }`}
            >
              <p className="text-sm font-semibold">Standard Delivery</p>
              <p className="text-xs text-[#666666]">3-5 business days - Free</p>
            </button>
            <button
              onClick={() => setDeliveryMethod("express")}
              className={`flex-1 p-4 rounded-lg border text-left ${
                deliveryMethod === "express"
                  ? "border-[#111111] bg-[#f5f5f7]"
                  : "border-[#e8e8ed]"
              }`}
            >
              <p className="text-sm font-semibold">Express Delivery</p>
              <p className="text-xs text-[#666666]">1-2 business days - $15</p>
            </button>
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-sm font-semibold text-[#111111] mb-4">Payment Method</p>
          <div className="flex flex-col gap-3">
            <div className="w-full h-12 bg-[#f5f5f7] rounded-lg flex items-center px-4">Credit Card</div>
            <div className="w-full h-12 bg-[#f5f5f7] rounded-lg flex items-center px-4">Bank Transfer</div>
          </div>
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
          
          <button className="w-full py-3 bg-[#111111] text-white rounded-lg font-medium">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
