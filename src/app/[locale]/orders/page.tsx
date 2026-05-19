import Link from "next/link";

const orders = [
  { id: "12345", status: "Delivered", statusColor: "bg-[#34c759]", date: "December 15, 2024", total: "$1,248" },
  { id: "12344", status: "Processing", statusColor: "bg-[#ff9500]", date: "December 10, 2024", total: "$999" },
  { id: "12343", status: "Shipped", statusColor: "bg-[#0066cc]", date: "December 5, 2024", total: "$249" },
];

export default function OrdersPage() {
  return (
    <div className="px-12 py-12">
      <h1 className="text-3xl font-bold text-[#111111] mb-8">My Orders</h1>
      
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-[#f5f5f7] rounded-xl p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-semibold text-[#111111]">Order {order.id}</h3>
              <span className={`px-3 py-1 rounded-full text-xs text-white ${order.statusColor}`}>
                {order.status}
              </span>
            </div>
            <p className="text-sm text-[#666666] mb-1">Date: {order.date}</p>
            <p className="text-sm text-[#111111] mb-2">Total: {order.total}</p>
            <Link href={`/orders/${order.id}`} className="text-sm text-[#0066cc] hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
