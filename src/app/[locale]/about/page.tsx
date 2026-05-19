export default function AboutPage() {
  return (
    <>
      <section className="py-24 px-12 bg-[#f8f9fa] text-center">
        <h1 className="text-5xl font-bold text-[#111111] mb-4">Your Trusted Tech Partner</h1>
        <p className="text-lg text-[#666666] max-w-xl mx-auto">
          We carefully select every product in our store to ensure you get only the best technology.
        </p>
      </section>
      
      <section className="py-20 px-12">
        <div className="flex items-center gap-16 max-w-6xl mx-auto">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#111111] mb-6">Our Story</h2>
            <p className="text-base text-[#666666] mb-4">
              Founded with a passion for technology, Ashop has grown to become Mongolia's premier destination for premium electronics.
            </p>
            <p className="text-base text-[#666666]">
              Every product in our collection is handpicked for quality, performance, and value.
            </p>
          </div>
          <div className="w-[500px] h-[400px] bg-[#f5f5f7] rounded-2xl">
            <div className="w-full h-full bg-gray-300 rounded-2xl" />
          </div>
        </div>
      </section>
      
      <section className="py-20 px-12 bg-[#f8f9fa]">
        <h2 className="text-4xl font-bold text-[#111111] text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Quality First", desc: "We only stock products that meet our rigorous quality standards." },
            { title: "Customer Focus", desc: "Your satisfaction is our top priority, always." },
            { title: "Innovation", desc: "We stay ahead of the curve to bring you the latest tech." },
          ].map((value) => (
            <div key={value.title} className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-[#111111] mb-3">{value.title}</h3>
              <p className="text-sm text-[#666666]">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
