"use client";

import Link from "next/link";
import Image from "next/image";
import { TbCar } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { ReactNode, useState } from "react";
import { MdShoppingBag } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { SlEarphonesAlt } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Category, User } from "../types/AboutTypes";

export default function About() {
  const users: User[] = [
    {
      src: "/images/Tom Cruise.webp",
      alt: "Founder",
      description: "Founder & Chairman",
      name: "Tom Cruise",
    },
    {
      src: "/images/Emma Watson.webp",
      alt: "Managing",
      description: "Managing Director",
      name: "Emma Watson",
    },
    {
      src: "/images/Will Smith.webp",
      alt: "Designer",
      description: "Product Designer",
      name: "Will Smith",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(Math.floor(users.length / 2));
  const categories: Category[] = [
    {
      icon: <FaHome />,
      number: "10.5k",
      description: "Sallers active on our site",
    },
    {
      icon: <AiOutlineDollarCircle />,
      number: "33k",
      description: "Monthly Product Sale",
    },
    {
      icon: <MdShoppingBag />,
      number: "45.5k",
      description: "Customers active on our site",
    },
    {
      icon: <FaSackDollar />,
      number: "25k",
      description: "Annual gross sale on our site",
    },
  ];
  interface Service {
    icon: ReactNode;
    title: string;
    description: string;
  }
  const services: Service[] = [
    {
      icon: <TbCar />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: <SlEarphonesAlt />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <GoShieldCheck />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];
  return (
    <>
      <nav className="m-10 text-gray-600 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline ml-1">
          About
        </Link>
      </nav>
      <section className="m-20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-11">
          <div className="md:w-1/2">
            <h1 className="font-bold text-5xl mb-6">Our Story</h1>
            <p className="text-lg mb-4 leading-relaxed text-gray-700">Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh.</p>
            <p className="text-lg leading-relaxed text-gray-700">Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion.</p>
          </div>
          <div className=" md:w-1/2 w-full">
            <Image src="/images/portrait-two1.webp" alt="Our Story" width={600} height={400} className="hidden md:block w-full h-auto object-cover rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="my-20">
          <div className="flex justify-center flex-wrap gap-8">
            {categories.map((item, index) => (
              <div key={index} className="border-2 border-black hover:bg-red-400 transition p-6 bg-yellow-50 rounded-md w-64 text-center">
                <div className="bg-black rounded-full m-auto w-18 h-18 text-white items-center text-3xl border-10 border-gray-500  flex justify-center ">{item.icon}</div>
                <span className="text-3xl font-bold mt-4 block">{item.number}</span>
                <h3 className="mt-2 text-gray-700">{item.description}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="block md:hidden">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Image src={users[currentIndex].src} alt={users[currentIndex].alt} width={500} height={200} className="w-full h-[397px] object-contain rounded-md mb-4" />
              <h2 className="text-xl font-semibold">{users[currentIndex].name}</h2>
              <h3 className="text-gray-600">{users[currentIndex].description}</h3>
            </div>
            <div className="flex justify-center mt-6">
              <ul className="flex gap-3">
                {users.map((_, index) => (
                  <li
                    key={index}
                    className={`w-4 h-4 rounded-full cursor-pointer transition ${index === currentIndex ? "bg-red-500 border-2 border-white" : "bg-gray-400"}`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-3 gap-8">
            {users.map((user, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <Image src={user.src} alt={user.alt} width={200} height={300} className="w-full h-[530px] object-contain rounded-md mb-4" />
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <h3 className="text-gray-600">{user.description}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
