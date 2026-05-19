"use client";

import { useState } from "react";
import Link from "next/link";

const colors = [
  { name: "Natural", value: "#c4c4c4" },
  { name: "Blue", value: "#4a6fa5" },
  { name: "White", value: "#f5f5f7" },
  { name: "Black", value: "#1a1a1a" },
];

const storageOptions = ["128GB", "256GB", "512GB"];

export default function ProductDetailPage() {
  const [selectedColor, setSelectedColor] = useState(colors[1]);
  const [selectedStorage, setSelectedStorage] = useState("256GB");

  return (
    <div className="flex gap-16 px-12 py-12">
      <div className="w-[600px]">
        <div className="w-full h-[500px] bg-[#f5f5f7] rounded-2xl mb-4">
          <div className="w-full h-full bg-gray-200 rounded-2xl" />
        </div>
        <div className="flex gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-20 h-20 bg-[#f5f5f7] rounded-lg">
              <div className="w-full h-full bg-gray-200 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[#111111] mb-2">iPhone 15 Pro</h1>
        <p className="text-2xl font-semibold text-[#111111] mb-4">$999</p>
        <p className="text-base text-[#666666] mb-6">
          Titanium design. A17 Pro chip. Groundbreaking performance.
        </p>
        
        <div className="mb-6">
          <p className="text-sm font-semibold text-[#111111] mb-3">Color</p>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor.name === color.name
                    ? "border-[#111111]"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-sm font-semibold text-[#111111] mb-3">Storage</p>
          <div className="flex gap-2">
            {storageOptions.map((storage) => (
              <button
                key={storage}
                onClick={() => setSelectedStorage(storage)}
                className={`px-4 py-2 rounded-lg text-sm ${
                  selectedStorage === storage
                    ? "bg-[#111111] text-white"
                    : "bg-[#f5f5f7] text-[#333333]"
                }`}
              >
                {storage}
              </button>
            ))}
          </div>
        </div>
        
        <button className="w-full py-3 bg-[#111111] text-white rounded-lg font-medium mb-3">
          Add to Cart
        </button>
        
        <button className="w-full py-3 text-[#333333] font-medium">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
