type WishlistContextType = {
  wishlist: ProductType[];
  addToWishlist: (product: ProductType) => void;
  removeFromWishlist: (id: number) => void;
};
