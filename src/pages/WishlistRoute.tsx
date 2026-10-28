import Wishlist from './Wishlist';
import { PRODUCTS } from '../data';
import type { Product } from '../types';

interface WishlistRouteProps {
  wishlist: string[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: string) => void;
}

export default function WishlistRoute({
  wishlist,
  onAddToCart,
  onToggleWishlist,
}: WishlistRouteProps) {
  const wishlistItems = PRODUCTS.filter((product) => wishlist.includes(product.id));

  return (
    <Wishlist
      wishlistItems={wishlistItems}
      onAddToCart={onAddToCart}
      onToggleWishlist={onToggleWishlist}
    />
  );
}
