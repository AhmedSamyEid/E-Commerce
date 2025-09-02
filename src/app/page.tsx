import Subnav from "@/layout/Subnav";
import Banner from "@/modules/auth/banner/components/Banner";
import SmallerBanners from "@/modules/auth/smallerbanners/components/SmallerBanners";
export default function Home() {
  return (
    <>
      <Subnav />
      <Banner />
      <SmallerBanners />
    </>
  );
}
