"use client";

import { useWishlist } from "@/modules/wishlistprovider/hooks/useWishlistProvider";

export default function TheFavorite() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Favorites</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">You don’t have any favorite products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
              <img src={item.image} alt={item.alt} className="w-32 h-32 object-contain rounded-lg mb-4" />
              <h3 className="text-lg font-medium w-50">{item.description}</h3>
              <p className="font-bold">${item.price}</p>
              <button onClick={() => removeFromWishlist(item.id)} className="mt-3 px-4 py-1 text-sm rounded-md cursor-pointer bg-red-500 text-white hover:bg-red-600 transition">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
