import RecommendedProducts from "@/components/sales/sales-product";
import { Heading } from '@/components/heading/heading';

const SaleList = () => {
  return (
    <div>
      <Heading  
        title="Хямдралтай бүтээгдэхүүнүүд" 
        className="sm:ml-[20px] lg:ml-0 mb-5" 
      />
      <div className="overflow-x-auto">
        <RecommendedProducts />
      </div>
    </div>
  );
};

export default SaleList;
