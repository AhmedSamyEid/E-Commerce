"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { useProductSlider } from "../hooks/useProductSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export default function ProductsNewArrival() {
  const products: ProductType[] = [
    {
      id: 1,
      name: "Product 1",
      alt: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 100,
      image: "/images/Iphone 14 pro 1.webp",
    },
    {
      id: 2,
      name: "Product 1",
      alt: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 100,
      image: "/images/Iphone 14 pro (1).webp",
    },
    {
      id: 3,
      name: "Product 1",
      alt: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 100,
      image: "/images/Iphone 14 pro (2).webp",
    },
    {
      id: 4,
      name: "Product 1",
      alt: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 100,
      image: "/images/Iphone 14 pro (3).webp",
    },
    {
      id: 5,
      name: "Product 1",
      alt: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 100,
      image: "/images/Iphone 14 pro (4).webp",
    },
    {
      id: 6,
      name: "Product 1",
      alt: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 100,
      image: "/images/Iphone 14 pro (5).webp",
    },
    {
      id: 7,
      name: "Product 1",
      alt: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 100,
      image: "/images/Iphone 14 pro .webp",
    },
    {
      id: 8,
      name: "Product 1",
      alt: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 100,
      image: "/images/Iphone 14 pro  (2).webp",
    },
  ];
  const { sliderRef, currentIndex, scrollLeft, scrollRight } = useProductSlider(products.length);
  return (
    <div className="my-5">
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-[#F6F6F6] p-4 rounded-lg shadow-md text-center relative transition-transform duration-300">
            <CiHeart className="absolute top-2 right-2 text-3xl text-[#707070] cursor-pointer p-1 rounded-full hover:text-white hover:bg-red-600 transition-all" />
            <Image src={product.image} alt={product.alt} width={160} height={160} className="object-cover mx-auto mb-4 rounded" />
            <h2 className="font-semibold mb-1">{product.name}</h2>
            <p className="text-gray-600 mb-1 text-sm">{product.description}</p>
            <p className="font-bold">${product.price}</p>
            <button className="mt-2 bg-black text-white px-6 py-2 cursor-pointer rounded hover:bg-gray-800 transition">Buy Now</button>
          </div>
        ))}
      </div>
      <div className="relative md:hidden flex justify-center items-center">
        <button onClick={scrollLeft} className="absolute left-2 z-10 bg-black text-white p-2 rounded-full shadow hover:bg-gray-800 transition">
          <IoIosArrowBack size={24} />
        </button>
        <div className="w-[220px]">
          <div className="bg-[#F6F6F6] p-4 rounded-lg shadow-md text-center relative">
            <CiHeart className="absolute top-2 right-2 text-3xl text-[#707070] cursor-pointer p-1 rounded-full hover:text-white hover:bg-red-600 transition-all" />
            <Image src={products[currentIndex].image} alt={products[currentIndex].alt} width={160} height={160} className="object-cover mx-auto mb-4 rounded" />
            <h2 className="font-semibold mb-1">{products[currentIndex].name}</h2>
            <p className="text-gray-600 mb-1 text-sm">{products[currentIndex].description}</p>
            <p className="font-bold">${products[currentIndex].price}</p>
            <button className="mt-2 bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition">Buy Now</button>
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-2 z-10 bg-black text-white p-2 rounded-full shadow hover:bg-gray-800 transition">
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
}
