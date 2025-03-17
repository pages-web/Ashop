import RecommendedProducts from "@/components/sales/sales-product";
import { Heading } from "@/components/heading/heading";
const SaleList = () => {
  return (
    <div className="md:h-[80vh] lg:h-[80vh]">
      <Heading
        title="Хямдралтай бүтээгдэхүүнүүд"
        className="text-sm md:text-3xl sm:mr-36 max:sm-mr-36"
      />

      <div className="overflow-x-auto">
        <RecommendedProducts />
      </div>
    </div>
  );
};

export default SaleList;
