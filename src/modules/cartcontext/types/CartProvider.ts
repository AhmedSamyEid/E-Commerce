export type CartProduct = {
  id: number;
  description: string;
  price: number;
  image: string;
  quantity: number;
};
export type CartContextType = {
  cartItems: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
};

// type ProductType = {
//   id: number;
//   description: string;
//   price: number;
//   image: string;
//   quantity: number;
// };

// type CartContextType = {
//   cartItems: ProductType[];
//   addToCart: (product: ProductType) => void;
//   removeFromCart: (id: number) => void;
// };