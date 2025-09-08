import Link from "next/link";
import { MdPhoneAndroid, MdCameraAlt, MdHeadsetMic } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

export default function Category() {
  const categories = [
    { name: "Phones", icon: <MdPhoneAndroid />, link: "/products" },
    { name: "Computers", icon: <RiComputerLine />, link: "/computers" },
    { name: "Cameras", icon: <MdCameraAlt />, link: "/cameras" },
    { name: "Headphones", icon: <MdHeadsetMic />, link: "/headphones" },
    { name: "Gaming", icon: <RiComputerLine />, link: "/gaming" },
  ];
  return (
    <div className=" mt-15 py-7 ">
      <h2 className="text-2xl font-semibold ml-10 mb-5">Browse By Category</h2>
      <div className="flex flex-wrap justify-around w-full gap-5">
        {categories.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className=" flex flex-col rounded-xl justify-center gap-2 font-semibold cursor-pointer 
    hover:bg-indigo-800 hover:border-indigo-800
    transition-colors duration-300 ease-in-out  bg-[#EDEDED] w-[160px] h-[128px] items-center  "
          >
            <div className="text-3xl text-black ">{item.icon}</div>
            <div className="text-sm text-black ">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
