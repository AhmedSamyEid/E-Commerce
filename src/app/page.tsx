import Banner from "@/modules/banner/Banner";
import Category from "@/modules/category/Category";
import SmallerBanners from "@/modules/smallerbanners/SmallerBanners";
import ProductsNewArrival from "@/modules/products/components/ProductsNewArrival";
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
