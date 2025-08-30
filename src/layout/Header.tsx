"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact US", href: "/contactus" },
  { name: "Blog", href: "/blog" },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="  flex flex-wrap items-center justify-between py-6 px-15">
        <div className="flex items-center gap-6 md:w-auto">
          <Image src="/images/Logo.webp" alt="logo Cyber" width={90} height={40} />
          <div className="hidden  md:flex flex-1 md:flex-initial  items-center gap-2 px-2 py-1 rounded bg-[#F5F5F5]  ">
            <CiSearch className="text-[#9c9797] text-2xl " />
            <input className="hidden lg:block outline-none rounded-s-xl w-[250px] h-[45px]" type="text" placeholder="Search..." />
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-10 ">
          {NavLinks.map((link) => (
            <li key={link.name} className="text-[#b8b6b6] hover:text-[#000]">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center ml-[10px] gap-8 ">
          <FaRegHeart />
          <MdOutlineShoppingCart />
          <LuUser />
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl cursor-pointer">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#F5F5F5] px-6 py-4 space-y-4">
          <div className="flex  items-center rounded bg-white">
            <CiSearch className="text-[#9c9797] text-2xl " />
            <input className="outline-none w-full h-[35px] px-2 " type="text" placeholder="Search..." />
          </div>

          <ul className="flex flex-col gap-4">
            {NavLinks.map((link) => (
              <li key={link.name} className="text-[#333] hover:text-black">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-6 pt-4">
            <FaRegHeart className="text-xl" />
            <MdOutlineShoppingCart className="text-xl" />
            <LuUser className="text-xl" />
          </div>
        </div>
      )}
    </header>
  );
}
