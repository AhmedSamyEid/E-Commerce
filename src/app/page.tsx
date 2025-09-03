import Banner from "@/modules/auth/banner/Banner";
import Category from "@/modules/auth/category/Category";
import SmallerBanners from "@/modules/auth/smallerbanners/SmallerBanners";
import ProductsNewArrival from "@/modules/auth/products/components/ProductsNewArrival";
export default function Home() {
  return (
    <>
      <Banner />
      <SmallerBanners />
      <Category />
      <ProductsNewArrival />
    </>
  );
}
