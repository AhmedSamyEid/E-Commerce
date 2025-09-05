"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useCart } from "@/modules/cartcontext/components/CartProvider";
import { useProductSlider } from "@/modules/products/hooks/useProductSlider";
import { useWishlist } from "@/modules/wishlistprovider/hooks/useWishlistProvider";

export default function ProductsNewArrival() {
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const products: ProductType[] = [
    {
      id: 1,
      alt: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 900,
      image: "/images/Iphone 14 pro 1.webp",
    },
    {
      id: 2,
      alt: "Blackmagic Pocket Cinema Camera 6K",
      description: "Blackmagic Pocket Cinema Camera 6K",
      price: 2553,
      image: "/images/Iphone 14 pro (1).webp",
    },
    {
      id: 3,
      alt: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      description: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      price: 400,
      image: "/images/Iphone 14 pro (2).webp",
    },
    {
      id: 4,
      alt: "AirPods Max Silver",
      description: "AirPods Max Silver",
      price: 600,
      image: "/images/Iphone 14 pro (3).webp",
    },
    {
      id: 5,
      alt: "Samsug Galaxy Wathch 6 Classic 47 mm Black",
      description: "Samsug Galaxy Wathch 6 Classic 47 mm Black",
      price: 300,
      image: "/images/Iphone 14 pro (4).webp",
    },
    {
      id: 6,
      alt: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      description: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      price: 1750,
      image: "/images/Iphone 14 pro (5).webp",
    },
    {
      id: 7,
      alt: "Galaxy Buds FE Graphite",
      description: "Galaxy Buds FE Graphite",
      price: 9999,
      image: "/images/Iphone 14 pro .webp",
    },
    {
      id: 8,
      alt: "Apple iPad 9 10.2 64GB Wi-Fi Sliver (MK2L3) 2025",
      description: "Apple iPad 9 10.2 64GB Wi-Fi Sliver (MK2L3) 2025",
      price: 375,
      image: "/images/Iphone 14 pro  (2).webp",
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
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-[#F6F6F6] p-4 rounded-lg shadow-md flex flex-col text-center relative transition-transform duration-300">
            <button onClick={() => handleHeartClick(product)}>
              <CiHeart className="absolute top-2 right-2 text-3xl text-[#707070] cursor-pointer p-1 rounded-full hover:text-white hover:bg-red-600 transition-all" />
            </button>
            <Image src={product.image} alt={product.alt} width={160} height={160} className="object-cover mx-auto mb-4 rounded" />
            <p className="text-black mb-1 text-lg">{product.description}</p>
            <p className="font-bold">${product.price}</p>
            <button onClick={() => handleBuyNow(product)} className="mt-auto bg-black cursor-pointer transition duration-300 ease-out text-white  py-2 rounded hover:bg-gray-800 ">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <div className="relative md:hidden flex justify-center items-center">
        <button onClick={scrollLeft} className="absolute left-2 top-0 z-10 bg-black text-white p-2 rounded-full shadow hover:bg-gray-800 transition">
          <IoIosArrowBack size={24} />
        </button>
        <div className="w-[220px]">
          <div className="bg-[#F6F6F6] p-4 rounded-lg shadow-md text-center relative">
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
