"use client";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import { LuUser } from "react-icons/lu";
import { CiSearch, CiLogout } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineShoppingCart, MdLogin } from "react-icons/md";
import { FaRegHeart, FaBars, FaTimes, FaUserPlus } from "react-icons/fa";
import { useCart } from "@/modules/cartcontext/components/CartProvider";
import { useWishlist } from "@/modules/wishlistprovider/hooks/useWishlistProvider";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact US", href: "/contactus" },
  { name: "Blog", href: "/blog" },
];
export default function Header() {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    Cookies.remove("token");
    toast.success("تم التسجيل الخروج بنجاح");
    setUserMenuOpen(false);
  };
  return (
    <header>
      <div className="  flex flex-wrap items-center justify-between py-6 px-15">
        <div className="flex items-center gap-6 md:w-auto">
          <Link href="/">
            <Image src="/images/Logo.webp" alt="logo Cyber" width={90} height={40} />
          </Link>
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
        <div className="hidden md:flex items-center ml-[10px] gap-8 text-2xl cursor-pointer">
          <Link href="/wishlist" className="relative group p-2 rounded-full transition-all duration-300 hover:bg-red-600">
            <FaRegHeart className="group-hover:text-white" />
            {wishlist.length > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{wishlist.length}</span>}
          </Link>
          <Link href="/cart" className="relative group p-2  rounded-full transition-all duration-300 hover:bg-red-600 ">
            <MdOutlineShoppingCart className=" group-hover:text-white text-2xl cursor-pointer" />
            {totalQuantity > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{totalQuantity}</span>}
          </Link>
          <div className="relative" ref={menuRef}>
            <button onClick={() => setOpen(!open)} className="group p-2 rounded-full transition-all duration-300 hover:bg-green-600">
              <LuUser className=" cursor-pointer group-hover:text-white text-2xl" />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-40 text-lg bg-white shadow-lg rounded-lg overflow-hidden z-50">
                <Link href="/auth/login" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpen(false)}>
                  <MdLogin className="text-green-600" />
                  <span>Login</span>
                </Link>
                <Link href="/auth/signup" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpen(false)}>
                  <FaUserPlus className="text-blue-600" />
                  <span>Signup</span>
                </Link>
                <button onClick={handleLogout} className="flex items-center w-full gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                  <CiLogout className="text-red-600" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl cursor-pointer">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F5F5F5] px-6 py-4 space-y-4">
          <div className="flex items-center rounded bg-white">
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
          <div className="flex gap-6 pt-4 items-center">
            <Link href="/wishlist" className="relative">
              <FaRegHeart className="text-2xl cursor-pointer" />
              {wishlist.length > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{wishlist.length}</span>}
            </Link>
            <Link href="/cart" className="relative">
              {totalQuantity > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{totalQuantity}</span>}
              <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
            </Link>
            <div className="relative" ref={menuRef}>
              <button onClick={() => setOpen(!open)} className="p-2 rounded-full hover:bg-green-600 transition">
                <LuUser className="text-2xl text-gray-700 hover:text-white" />
              </button>
              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                  <Link href="/auth/login" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpen(false)}>
                    <MdLogin className="text-green-600" />
                    <span>Login</span>
                  </Link>
                  <Link href="/auth/signup" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpen(false)}>
                    <FaUserPlus className="text-blue-600" />
                    <span>Signup</span>
                  </Link>
                  <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 w-full cursor-pointer hover:bg-gray-100 transition">
                    <CiLogout className="text-red-600" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
