import RecommendedProducts from "@/components/sales/sales-product";
import { Heading } from '@/components/heading/heading';

const SaleList = () => {
  return (
    <div>
      <Heading  
        title="Хямдралтай бүтээгдэхүүнүүд" 
        className="sm:text-center lg:mt-16 lg:mb-8 lg:text-2xl relative sm:bottom-[35px]" 
      />
      <div className="overflow-x-auto">
        <RecommendedProducts />
      </div>
    </div>
  );
};

export default SaleList;
