import ProductsContainer from "@/components/product-card/products-container";
import ProfileLayout from "../profile-layout";
import Wishlist from "./Wishlist";

const WishlistPage = () => {
  return (
    <ProfileLayout
      title="Хүслийн жагсаалт"
      description="Танд таалагдсан бүтээгдэхүүнүүд"
    >
      <ProductsContainer>
        <Wishlist />
      </ProductsContainer>
    </ProfileLayout>
  );
};

export default WishlistPage;
