import Image from "next/image";

export default function SmallerBanners() {
  const banners = [
    {
      title: "Playstation 5",
      description: "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.",
      desktopImage: "/images/PlayStation.webp",
      mobileImage: "/images/hero__gnfk mobile (2).webp",
    },
    {
      title: "Apple AirPods Max",
      description: "Computational audio. Listen, it’s powerful",
      desktopImage: "/images/hero__gnfk.webp",
      mobileImage: "/images/hero__gnfk mobile (1).webp",
      bg: "bg-[#EDEDED]",
    },
    {
      title: "Apple Vision Pro",
      description: "An immersive way to experience entertainment",
      desktopImage: "/images/image 36.webp",
      mobileImage: "/images/hero__gnfk mobile (3).webp",
      bg: "bg-[#353535]",
      text: "text-white",
    },
    {
      title: "Macbook Air",
      description: "The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display..",
      desktopImage: "/images/Screen.webp",
      mobileImage: "/images/Screen mobile.webp",
      bg: "bg-[#EDEDED]",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6">
      <div className="flex flex-col  gap-6 flex-1 min-w-[300px]">
        {banners.slice(0, 1).map((item) => (
          <div key={item.title} className="flex flex-col text-center md:flex-row bg-white rounded-lg shadow-md items-center p-4">
            <div className="relative w-[220px] h-[250px] flex-shrink-0 hidden md:block">
              <Image src={item.desktopImage} alt={item.title} fill sizes="200px" className="rounded-lg object-contain" />
            </div>
            <div className="relative w-[150px] h-[180px] flex-shrink-0 block md:hidden">
              <Image src={item.mobileImage} alt={item.title} fill sizes="150px" className="rounded-lg object-contain" />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-semibold md:text-4xl mb-2">{item.title}</h2>
              <p className="text-sm text-gray-500 max-w-[350px] leading-6">{item.description}</p>
            </div>
          </div>
        ))}

        <div className="flex flex-wrap gap-6">
          {banners.slice(1, 3).map((item) => (
            <div key={item.title} className={`flex flex-col ${item.bg} p-6 rounded-lg shadow-md flex-1 min-w-[200px]`}>
              <div className="relative w-full h-40 hidden md:block">
                <Image src={item.desktopImage} alt={item.title} fill sizes="400px" className="rounded-lg object-contain" />
              </div>
              <div className="relative w-full h-32 block md:hidden">
                <Image src={item.mobileImage} alt={item.title} fill sizes="200px" className="rounded-lg object-contain" />
              </div>
              <div className="mt-4">
                <h2 className={`text-3xl ${item.text} font-normal mb-2`}>{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {banners.slice(3).map((item) => (
        <div key={item.title} className={`flex flex-col items-center text-center md:flex-row ${item.bg} p-10 rounded-lg shadow-md items-center justify-between flex-1 min-w-[300px] max-h-[450px]`}>
          <div className="relative w-[200px] h-[200px] block md:hidden">
            <Image src={item.mobileImage} alt={item.title} fill sizes="200px" className="rounded-lg object-contain" />
          </div>
          <div className="max-w-md">
            <h2 className="text-5xl font-normal mb-2">{item.title}</h2>
            <p className="text-sm text-gray-500 leading-6 max-w-[370px]">{item.description}</p>
            <button className="mt-5 px-5 py-2 border cursor-pointer bg-transparent transition duration-300 ease-out border-black rounded-md hover:bg-black hover:text-white">Shop Now</button>
          </div>
          <div className="relative w-[300px] h-[300px] hidden md:block">
            <Image src={item.desktopImage} alt={item.title} fill sizes="300px" className="rounded-lg object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
}
