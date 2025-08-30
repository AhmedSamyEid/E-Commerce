import { MdPhoneAndroid, MdCameraAlt, MdHeadsetMic } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

export default function Subnav() {
  const subnav = [
    { name: "Phones", icon: <MdPhoneAndroid /> },
    { name: "Computers", icon: <RiComputerLine /> },
    { name: "Smart Watches", icon: <MdCameraAlt /> },
    { name: "Headphones", icon: <MdHeadsetMic /> },
    { name: "Gaming", icon: <RiComputerLine /> },
  ];
  return (
    <div className=" hidden md:block py-2 bg-[#313030]">
      <ul className="flex justify-around w-full">
        {subnav.map((item) => (
          <li key={item.name} className="flex gap-2 font-semibold cursor-pointer ">
            <div className="text-3xl text-[#949393] ">{item.icon}</div>
            <div className="text-sm text-[#b8b6b6] ">{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
