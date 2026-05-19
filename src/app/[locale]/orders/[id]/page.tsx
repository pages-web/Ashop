import Link from "next/link";

const timeline = [
  { step: "Order Placed", date: "Dec 15" },
  { step: "Processing", date: "Dec 16" },
  { step: "Shipped", date: "Dec 17" },
  { step: "Delivered", date: "Dec 20" },
];

const items = [
  { name: "iPhone 15 Pro - 256GB", price: "$999" },
  { name: "AirPods Pro", price: "$249" },
];

export default function OrderDetailPage() {
  return (
    <div className="px-12 py-12">
      <h1 className="text-3xl font-bold text-[#111111] mb-8">Order 12345</h1>
      
      <div className="flex justify-between bg-[#f5f5f7] rounded-xl p-6 mb-8">
        {timeline.map((t, i) => (
          <div key={i} className="text-center">
            <p className="text-sm text-[#34c759] font-medium">{t.step}</p>
            <p className="text-xs text-[#666666]">{t.date}</p>
          </div>
        ))}
      </div>
      
      <h2 className="text-xl font-semibold text-[#111111] mb-4">Items</h2>
      
      <div className="flex flex-col gap-3 mb-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-[#f5f5f7] rounded-lg p-4">
            <div className="w-20 h-20 bg-[#e8e8ed] rounded-lg">
              <div className="w-full h-full bg-gray-200 rounded-lg" />
            </div>
            <span className="flex-1 text-base text-[#111111]">{item.name}</span>
            <span className="text-base text-[#111111]">{item.price}</span>
          </div>
        ))}
      </div>
      
      <div className="bg-[#f5f5f7] rounded-xl p-6">
        <div className="flex justify-between mb-3">
          <span className="text-sm text-[#666666]">Subtotal</span>
          <span className="text-sm text-[#111111]">$1,248</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="text-sm text-[#666666]">Shipping</span>
          <span className="text-sm text-[#34c759]">Free</span>
        </div>
        <div className="flex justify-between pt-3 border-t border-[#e8e8ed]">
          <span className="text-lg font-semibold text-[#111111]">Total</span>
          <span className="text-lg font-semibold text-[#111111]">$1,248</span>
        </div>
      </div>
    </div>
  );
}
