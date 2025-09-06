import Link from "next/link";
import { RiComputerLine } from "react-icons/ri";
import { MdPhoneAndroid, MdCameraAlt, MdHeadsetMic } from "react-icons/md";

export default function Subnav() {
  const subnav = [
    { name: "Phones", icon: <MdPhoneAndroid />, link: "/products" },
    { name: "Computers", icon: <RiComputerLine />, link: "/computers" },
    { name: "Cameras", icon: <MdCameraAlt />, link: "/cameras" },
    { name: "Headphones", icon: <MdHeadsetMic />, link: "/products" },
    { name: "Gaming", icon: <RiComputerLine />, link: "/products" },
  ];
  return (
    <div className=" hidden md:block py-2 bg-[#313030]">
      <div className="flex justify-around w-full">
        {subnav.map((item) => (
          <Link key={item.name} href={item.link} className="flex gap-2 font-semibold cursor-pointer ">
            <div className="text-3xl text-[#949393] ">{item.icon}</div>
            <div className="text-sm text-[#b8b6b6] ">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
