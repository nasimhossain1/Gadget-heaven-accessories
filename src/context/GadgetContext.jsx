import { createContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { getStoredData, setStoredData } from "../utils/localStorage";

export const GadgetContext = createContext(null);

const CART_KEY = "gadget_cart";
const WISH_KEY = "gadget_wishlist";
const MAX_TOTAL = 1000;

export const GadgetProvider = ({ children }) => {
  const [cart, setCart] = useState(() => getStoredData(CART_KEY));
  const [wishlist, setWishlist] = useState(() => getStoredData(WISH_KEY));

  // total cost
  const totalCost = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  // persist
  useEffect(() => {
    setStoredData(CART_KEY, cart);
  }, [cart]);

  useEffect(() => {
    setStoredData(WISH_KEY, wishlist);
  }, [wishlist]);

  const isInCart = (id) => cart.some((p) => p.product_id === id);
  const isInWishlist = (id) => wishlist.some((p) => p.product_id === id);

  const canAddToCart = (price) => totalCost + price <= MAX_TOTAL;

  const addToCart = (product) => {
    if (isInCart(product.product_id)) {
      toast("Already in cart 🛒");
      return false;
    }

    if (!canAddToCart(product.price)) {
      toast.error("Cart total cannot exceed $1000!");
      return false;
    }

    setCart((prev) => [...prev, product]);
    toast.success("Added to cart 🛒");
    return true;
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.product_id !== id));
    toast.success("Removed from cart ❌");
  };

  const addToWishlist = (product) => {
    if (isInWishlist(product.product_id)) {
      toast("Already in wishlist ❤️");
      return false;
    }

    setWishlist((prev) => [...prev, product]);
    toast.success("Added to wishlist ❤️");
    return true;
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((p) => p.product_id !== id));
    toast.success("Removed from wishlist ❌");
  };

  // Wishlist -> Cart
  const moveWishToCart = (product) => {
    // first check cart limit
    if (!canAddToCart(product.price)) {
      toast.error("Cannot move. Cart total exceeds $1000!");
      return false;
    }

    // add to cart
    setCart((prev) => {
      if (prev.some((p) => p.product_id === product.product_id)) return prev;
      return [...prev, product];
    });

    // remove from wishlist
    setWishlist((prev) => prev.filter((p) => p.product_id !== product.product_id));

    toast.success("Moved to cart 🛒");
    return true;
  };

  const clearCart = () => {
    setCart([]);
  };

  const sortCartByPriceDesc = () => {
    setCart((prev) => [...prev].sort((a, b) => b.price - a.price));
  };

  const value = {
    cart,
    wishlist,
    totalCost,
    MAX_TOTAL,

    addToCart,
    removeFromCart,

    addToWishlist,
    removeFromWishlist,

    moveWishToCart,
    clearCart,
    sortCartByPriceDesc,

    isInCart,
    isInWishlist
  };

  return <GadgetContext.Provider value={value}>{children}</GadgetContext.Provider>;
};
