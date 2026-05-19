import Link from "next/link";

const posts = [
  {
    id: 1,
    category: "Buying Guide",
    title: "How to Choose the Perfect Laptop in 2024",
    date: "December 15, 2024",
  },
  {
    id: 2,
    category: "Tech News",
    title: "Top 10 Gadgets You Need This Holiday Season",
    date: "December 10, 2024",
  },
  {
    id: 3,
    category: "Review",
    title: "iPhone 15 Pro: A Month Later Review",
    date: "December 5, 2024",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="py-16 px-12 bg-[#f8f9fa] text-center">
        <h1 className="text-5xl font-bold text-[#111111] mb-4">Our Blog</h1>
        <p className="text-lg text-[#666666]">Latest news, reviews, and tech insights.</p>
      </section>
      
      <section className="py-12 px-12">
        <div className="grid grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="group cursor-pointer">
                <div className="w-full h-[260px] bg-[#f5f5f7] rounded-2xl mb-4">
                  <div className="w-full h-full bg-gray-200 rounded-2xl" />
                </div>
                <p className="text-xs font-semibold text-[#0066cc] mb-2">{post.category}</p>
                <h3 className="text-lg font-semibold text-[#111111] mb-2">{post.title}</h3>
                <p className="text-sm text-[#999999]">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
