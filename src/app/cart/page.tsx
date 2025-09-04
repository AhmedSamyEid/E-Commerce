"use client";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { useCart } from "@/modules/cartcontext/components/CartProvider";

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const increaseQuantity = (id: number) => {
    const product = cartItems.find((item) => item.id === id);
    if (product) addToCart({ ...product, quantity: 1 });
  };

  const decreaseQuantity = (id: number) => {
    const product = cartItems.find((item) => item.id === id);
    if (product) {
      if (product.quantity === 1) removeFromCart(id);
      else addToCart({ ...product, quantity: -1 });
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="relative flex flex-col sm:flex-row items-center sm:items-start bg-white shadow rounded-lg p-4">
              <button onClick={() => removeFromCart(item.id)} className="absolute top-2 right-2 text-xl text-red-600 hover:text-red-800 cursor-pointer">
                <FaTimes />
              </button>

              <Image src={item.image} alt={item.description} width={120} height={120} className="rounded-lg object-cover mb-4 sm:mb-0" />

              <div className="sm:ml-6 flex-1 w-full text-center sm:text-left">
                <p className="font-semibold text-gray-800">{item.description}</p>
                <p className="text-gray-600 mb-2">${item.price}</p>

                <div className="flex justify-center sm:justify-start items-center gap-2">
                  <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg">
                    -
                  </button>
                  <span className="px-4 text-lg">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right font-bold text-xl pt-4">Total: ${totalPrice.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}
