"use client";
import { useEffect, useState } from "react";
import { GiProcessor } from "react-icons/gi";
import { BsBatteryFull } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import { FaMicrochip, FaCameraRetro, FaCamera } from "react-icons/fa";
import { useCart } from "@/modules/cartcontext/components/CartProvider";

const products: ProductsPhonesTypes[] = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro Max",
    description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: 900,
    oldPrice: 1100,
    colors: [
      { color: "#FFD700", image: "/images/Iph_one 14 pro.webp" },
      { color: "#000000", image: "/images/Iphone 14 pro_.webp" },
      { color: "#4B0082", image: "/images/Iphone 14 pro.webp" },
      { color: "#FFFFFF", image: "/images/Iphone 14 _pro.webp" },
      { color: "#767474", image: "/images/Iphone -14 pro.webp" },
      { color: "#C0C0C0", image: "/images/Iphone_14 pro.webp" },
    ],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    specs: {
      screen: '6.7"',
      cpu: "Apple A16 Bionic",
      cores: "6",
      mainCamera: "48+12+12 MP",
      frontCamera: "12 MP",
      battery: "4323 mAh",
    },
  },
  {
    id: 2,
    name: "Apple iPhone 14 Pro Max",
    description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: 510,
    oldPrice: 600,
    colors: [
      { color: "#FFFFFF", image: "/images/Iphone 14 _pro.webp" },
      { color: "#000000", image: "/images/Iphone 14 pro_.webp" },
      { color: "#4B0082", image: "/images/Iphone 14 pro.webp" },
      { color: "#FFD700", image: "/images/Iph_one 14 pro.webp" },
      { color: "#767474", image: "/images/Iphone -14 pro.webp" },
      { color: "#C0C0C0", image: "/images/Iphone-14-silver.webp" },
    ],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    specs: {
      screen: '6.7"',
      cpu: "Apple A16 Bionic",
      cores: "6",
      mainCamera: "48+12+12 MP",
      frontCamera: "12 MP",
      battery: "4323 mAh",
    },
  },
  {
    id: 3,
    name: "Apple iPhone 14 Pro Max",
    description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: 850,
    oldPrice: 950,
    colors: [
      { color: "#4B0082", image: "/images/Iphone 14 pro.webp" },
      { color: "#FFFFFF", image: "/images/Iphone 14 _pro.webp" },
      { color: "#000000", image: "/images/Iphone 14 pro_.webp" },
      { color: "#FFD700", image: "/images/Iph_one 14 pro.webp" },
      { color: "#767474", image: "/images/Iphone -14 pro.webp" },
      { color: "#C0C0C0", image: "/images/Iphone_14 pro.webp" },
    ],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    specs: {
      screen: '6.7"',
      cpu: "Apple A16 Bionic",
      cores: "6",
      mainCamera: "48+12+12 MP",
      frontCamera: "12 MP",
      battery: "4323 mAh",
    },
  },
  {
    id: 4,
    name: "Apple iPhone 14 Pro Max",
    description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: 1399,
    oldPrice: 1499,
    colors: [
      { color: "#C0C0C0", image: "/images/Iphone_14 pro.webp" },
      { color: "#FFFFFF", image: "/images/Iphone 14 _pro.webp" },
      { color: "#000000", image: "/images/Iphone 14 pro_.webp" },
      { color: "#4B0082", image: "/images/Iphone 14 pro.webp" },
      { color: "#FFD700", image: "/images/Iph_one 14 pro.webp" },
      { color: "#767474", image: "/images/Iphone -14 pro.webp" },
    ],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    specs: {
      screen: '6.7"',
      cpu: "Apple A16 Bionic",
      cores: "6",
      mainCamera: "48+12+12 MP",
      frontCamera: "12 MP",
      battery: "4323 mAh",
    },
  },
  {
    id: 5,
    name: "Apple iPhone 14 Pro Max",
    description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: 1399,
    oldPrice: 1499,
    colors: [
      { color: "#767474", image: "/images/Iphone -14 pro.webp" },
      { color: "#FFFFFF", image: "/images/Iphone 14 _pro.webp" },
      { color: "#000000", image: "/images/Iphone 14 pro_.webp" },
      { color: "#4B0082", image: "/images/Iphone 14 pro.webp" },
      { color: "#FFD700", image: "/images/Iph_one 14 pro.webp" },
      { color: "#C0C0C0", image: "/images/Iphone_14 pro.webp" },
    ],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    specs: {
      screen: '6.7"',
      cpu: "Apple A16 Bionic",
      cores: "6",
      mainCamera: "48+12+12 MP",
      frontCamera: "12 MP",
      battery: "4323 mAh",
    },
  },
  {
    id: 6,
    name: "Apple iPhone 14 Pro Max",
    description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: 1399,
    oldPrice: 1499,
    colors: [
      { color: "#000000", image: "/images/Iphone 14 pro_.webp" },
      { color: "#FFFFFF", image: "/images/Iphone 14 _pro.webp" },
      { color: "#4B0082", image: "/images/Iphone 14 pro.webp" },
      { color: "#FFD700", image: "/images/Iph_one 14 pro.webp" },
      { color: "#767474", image: "/images/Iphone -14 pro.webp" },
      { color: "#C0C0C0", image: "/images/Iphone_14 pro.webp" },
    ],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    specs: {
      screen: '6.7"',
      cpu: "Apple A16 Bionic",
      cores: "6",
      mainCamera: "48+12+12 MP",
      frontCamera: "12 MP",
      battery: "4323 mAh",
    },
  },
];

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const product = products.find((p) => p.id === Number(params?.id));
  const [selectedColor, setSelectedColor] = useState<ColorType | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const { addToCart } = useCart();
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors?.[0] ?? null);
      setSelectedStorage(product.storage?.[0] ?? null);
    }
  }, [product]);
  if (!product || !selectedColor || !selectedStorage) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[200px]">
        <p className="text-gray-600">Loading product...</p>
      </div>
    );
  }
  const imageForCart = selectedColor?.image ?? product.colors?.[0]?.image ?? "";
  const handleBuyNow = () => {
    addToCart({
      ...product,
      image: imageForCart,
      selectedColor: selectedColor.color,
      selectedStorage,
      quantity: 1,
    } as any);
    router.push("/cart");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-10">
      <div className="flex justify-center lg:w-1/2">
        <img src={selectedColor.image} alt={product.name} className="w-[250px] h-[300px] object-cover rounded shadow-md" />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-black">${product.price}</span>
          <span className="line-through text-gray-500">${product.oldPrice}</span>
        </div>
        <p className="font-semibold mb-2">Select color :</p>
        <div className="flex gap-2 mb-4">
          {product.colors.map((c) => (
            <button
              key={c.color}
              onClick={() => setSelectedColor(c)}
              className={`w-7 h-7 rounded-full border ${selectedColor.color === c.color ? "ring-2 ring-black" : ""}`}
              style={{ backgroundColor: c.color }}
            />
          ))}
        </div>
        <p className="font-semibold mb-2">Select storage :</p>
        <div className="flex gap-2 flex-wrap mb-6">
          {product.storage.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedStorage(s)}
              className={`px-4 py-2 border rounded cursor-pointer transition ${selectedStorage === s ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"}`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 mb-6 text-sm items-center text-center text-black">
          <p className="flex items-center gap-2 bg-gray-200 w-40 h-10 rounded-lg">
            <MdPhoneIphone className="text-lg" /> Screen: {product.specs.screen}
          </p>
          <p className="flex items-center gap-2 bg-gray-200 w-40 h-10 rounded-lg">
            <FaMicrochip className="text-lg" /> CPU: {product.specs.cpu}
          </p>
          <p className="flex items-center gap-2 bg-gray-200 w-40 h-10 rounded-lg">
            <GiProcessor className="text-lg" /> Cores: {product.specs.cores}
          </p>
          <p className="flex items-center gap-2 bg-gray-200 w-40 h-10 rounded-lg">
            <FaCamera className="text-lg" /> Main: {product.specs.mainCamera}
          </p>
          <p className="flex items-center gap-2 bg-gray-200 w-40 h-10 rounded-lg">
            <FaCameraRetro className="text-lg" /> Front: {product.specs.frontCamera}
          </p>
          <p className="flex items-center gap-2 bg-gray-200 w-40 h-10 rounded-lg">
            <BsBatteryFull className="text-lg" /> Battery: {product.specs.battery}
          </p>
        </div>
        <div className="flex gap-4 mb-6">
          <button className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 rounded">Add to Wishlist</button>
          <button onClick={handleBuyNow} className="flex-1 py-3 bg-black text-white hover:bg-gray-800 rounded">
            Add to Cart
          </button>
        </div>
        <div className="grid grid-cols-3 text-center text-sm text-gray-600">
          <div>
            🚚 <p>Free Delivery 1-2 days</p>
          </div>
          <div>
            📦 <p>In Stock Today</p>
          </div>
          <div>
            🛡 <p>1 Year Warranty</p>
          </div>
        </div>
      </div>
    </div>
  );
}
