import RecommendedProducts from "@/components/sales/sales-product";



const SaleList = () => {
  return (
    <div className="min-h-screen">
      <h1 className="title my-8 p-6 text-primary font-bold text-xl sm:text-2xl lg:text-3xl text-center  sm:w-[80%] lg:w-[400px] mx-auto">
        Хямдралтай бүтээгдэхүүнүүд
      </h1>
      <div className="overflow-x-auto">
        <RecommendedProducts />
      </div>
    </div>
  );
};

export default SaleList;
