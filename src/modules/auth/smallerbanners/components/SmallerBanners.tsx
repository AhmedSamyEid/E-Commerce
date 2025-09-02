import Image from "next/image";
export default function SmallerBanners() {
  const banners = [
    {
      image: "/images/PlayStation.webp",
      title: "Playstation 5",
      description: "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
      width: 200,
      height: 200,
    },
    { image: "/images/hero__gnfk.webp", title: "Apple AirPods Max", description: "Computational audio. Listen, it s powerful", width: 50, height: 50, bg: "bg-[#EDEDED]" },
    { image: "/images/image 36.webp", title: "Apple Vision Pro", description: "An immersive way to experience entertainment", width: 100, height: 50, bg: "bg-[#353535]", text: "text-white" },
    {
      image: "/images/Screen.webp",
      title: "Macbook Air",
      description: "The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display..",
      width: 100,
      height: 50,
      bg: "bg-[#EDEDED]",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="grid grid-rows-2 ">
        {banners.slice(0, 1).map((item) => (
          <div key={item.title} className="flex bg-white rounded-lg shadow-md items-center">
            <Image src={item.image} alt={item.title} width={item.width} height={item.height} className="rounded-lg object-cover" />
            <div className="ml-6">
              <h2 className="text-2xl font-semibold md:text-4xl">{item.title}</h2>
              <p className="text-sm text-gray-500 max-w-[350px] leading-6">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-2 ">
          {banners.slice(1, 3).map((item) => (
            <div key={item.title} className={`flex flex-col ${item.bg} p-6 rounded-lg shadow-md`}>
              <Image src={item.image} alt={item.title} width={item.width} height={item.height} className="rounded-lg object-cover" />
              <div className="mt-4">
                <h2 className={`text-3xl ${item.text} font-normal`}>{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {banners.slice(3).map((item) => (
        <div key={item.title} className={`flex ${item.bg} p-10 rounded-lg shadow-md items-center justify-between`}>
          <div className="max-w-md">
            <h2 className="text-5xl font-normal">{item.title}</h2>
            <p className="text-sm text-gray-500 leading-6 mt- max-w-[370px]">{item.description}</p>
            <button className="mt-5 px-5 py-2 border cursor-pointer bg-transparent transition duration-300 ease-out border-black rounded-md hover:bg-black hover:text-white ">Shop Now</button>
          </div>
          <Image src={item.image} alt={item.title} width={item.width} height={item.height} className="rounded-lg object-cover" />
        </div>
      ))}
    </div>
  );
}
