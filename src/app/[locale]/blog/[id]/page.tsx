export default function BlogPostPage() {
  return (
    <article className="max-w-3xl mx-auto py-12 px-12">
      <span className="text-sm font-semibold text-[#0066cc]">Buying Guide</span>
      <h1 className="text-4xl font-bold text-[#111111] mt-2 mb-4">
        How to Choose the Perfect Laptop in 2024
      </h1>
      <p className="text-sm text-[#999999] mb-8">December 15, 2024</p>
      
      <div className="w-full h-[400px] bg-[#f5f5f7] rounded-2xl mb-8">
        <div className="w-full h-full bg-gray-200 rounded-2xl" />
      </div>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-base text-[#333333] mb-4">
          Choosing the right laptop can be overwhelming with so many options available. 
          In this guide, we'll help you find the perfect laptop for your needs.
        </p>
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-4">Consider Your Needs</h2>
        <p className="text-base text-[#333333] mb-4">
          Before making a purchase, think about what you'll primarily use the laptop for. 
          Are you a student, professional, gamer, or creative?
        </p>
        
        <h2 className="text-2xl font-bold text-[#111111] mt-8 mb-4">Key Specifications</h2>
        <p className="text-base text-[#333333] mb-4">
          Look for at least 16GB of RAM, a modern processor, and sufficient storage. 
          SSD storage is highly recommended for better performance.
        </p>
      </div>
    </article>
  );
}
