"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCart } from "@/modules/cartcontext/components/CartProvider";
import { useProductSlider } from "@/modules/products/hooks/useProductSlider";
import { useWishlist } from "@/modules/wishlistprovider/hooks/useWishlistProvider";

export default function HeadphonesPage() {
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const products: ProductType[] = [
    {
      id: 1,
      price: 1200,
      alt: "AirPods Max Silver",
      image: "/images/hero__gnfk mobile (1).webp",
      description: "AirPods Max Silver",
    },
    {
      id: 2,
      price: 2200,
      image: "/images/Iphone 14 pro .webp",
      alt: "Galaxy Buds FE Graphite",
      description: "Galaxy Buds FE Graphite",
    },
    {
      id: 4,
      price: 399,
      image: "/images/image 39.webp",
      alt: "AirPods",
      description: "AirPods",
    },
  ];
  const { sliderRef, currentIndex, scrollLeft, scrollRight } = useProductSlider(products.length);
  const handleBuyNow = (product: ProductType) => {
    addToCart({ ...product, quantity: 1 });
    router.push("/cart");
  };
  const handleHeartClick = (product: ProductType) => {
    addToWishlist(product);
    router.push("/wishlist");
  };
  return (
    <div className="my-5">
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-[#F6F6F6] p-4  rounded-lg shadow-md flex flex-col text-center relative transition-transform duration-300">
            <button onClick={() => handleHeartClick(product)}>
              <CiHeart className="absolute top-2 right-2 text-3xl text-[#707070] cursor-pointer p-1 rounded-full hover:text-white hover:bg-red-600 transition-all" />
            </button>
            <Image src={product.image} alt={product.alt} width={200} height={200} className="object-cover mx-auto mb-4 rounded" /> <p className="text-black mb-1 text-lg">{product.description}</p>
            <p className="font-bold">${product.price}</p>
            <button onClick={() => handleBuyNow(product)} className="mt-auto bg-black cursor-pointer transition duration-300 ease-out text-white  py-2 rounded hover:bg-gray-800 ">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <div className="relative md:hidden flex  justify-center items-center">
        <button onClick={scrollLeft} className="absolute left-2 top-0 z-10 bg-black text-white p-2 rounded-full shadow hover:bg-gray-800 transition">
          <IoIosArrowBack size={24} />
        </button>
        <div className="w-[220px]">
          <div className="bg-[#F6F6F6] h-90 p-4 rounded-lg shadow-md text-center relative">
            <button onClick={() => handleHeartClick(products[currentIndex])}>
              <CiHeart className="absolute top-2 right-2 text-3xl text-[#707070] cursor-pointer p-1 rounded-full hover:text-white hover:bg-red-600 transition-all" />
            </button>
            <Image src={products[currentIndex].image} alt={products[currentIndex].alt} width={160} height={160} className="object-cover mx-auto mb-4 rounded" />
            <p className="text-gray-600 mb-1 text-sm">{products[currentIndex].description}</p>
            <p className="font-bold">${products[currentIndex].price}</p>
            <button onClick={() => handleBuyNow(products[currentIndex])} className="mt-2 cursor-pointer bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-2 top-0 z-10 bg-black text-white p-2 rounded-full shadow hover:bg-gray-800 transition">
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
}
