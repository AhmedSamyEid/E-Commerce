import Image from "next/image";

export default function BannersPage() {
  return (
    <div className="relative items-center text-center">
      <Image src="/images/Banner 2.webp" width={0} height={0} alt="Banner 2" className="w-full h-full object-cover" />
      <div className="absolute md: top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className=" text-2xl md:text-6xl text-white font-thin mb-4">
          Big Summer <span className="font-bold">Sale</span>
        </h2>
        <p className="hidden md:block text-gray-500">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
        <button className=" border  transition duration-300 ease-out mt-2 text-white py-3 px-7 cursor-pointer tr rounded-md hover:bg-black border-black">Shop Now</button>
      </div>
    </div>
  );
}
