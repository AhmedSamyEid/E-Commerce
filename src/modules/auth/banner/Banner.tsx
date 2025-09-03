export default function Banner() {
  return (
  <div
  className="
    w-full min-h-[632px] bg-cover bg-center flex flex-col
    items-start justify-center px-6 sm:px-12 md:px-[30px] gap-4 text-left
    bg-[url('/images/Banner-mbulie.webp')]
    md:bg-[url('/images/Banner.webp')]
  "
>
      <div className="text-center md:text-start mb-30 ">
        <p className="text-lg text-gray-400 font-semibold">Pro. Beyond.</p>
        <h1 className="text-6xl md:text-7xl font-stretch-50% text-white ">iPhone 14 Pro</h1>
        <p className="max-w-md mt-2 text-gray-400">Created to change everything for the better. For everyone.</p>
        <button
          className="mt-5 px-7 py-3 cursor-pointer border border-amber-50 text-white font-semibold rounded-lg  bg-transparent
    hover:bg-indigo-800 hover:border-indigo-800
    transition-colors duration-300 ease-in-out"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
