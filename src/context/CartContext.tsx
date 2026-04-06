import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "../Components/types";

export interface CartItem {
  product: Product;
  variant: { size: string; stock: number } | null;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, variant: { size: string; stock: number } | null, qty: number) => void;
  removeItem: (productId: number, size: string | undefined) => void;
  updateQty: (productId: number, size: string | undefined, qty: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const key = (productId: number, size: string | undefined) =>
    `${productId}-${size ?? ""}`;

  const addItem = (
    product: Product,
    variant: { size: string; stock: number } | null,
    qty: number
  ) => {
    setItems((prev) => {
      const k = key(product.id, variant?.size);
      const existing = prev.find(
        (i) => key(i.product.id, i.variant?.size) === k
      );
      if (existing) {
        return prev.map((i) =>
          key(i.product.id, i.variant?.size) === k
            ? { ...i, quantity: Math.min(i.quantity + qty, variant?.stock ?? 99) }
            : i
        );
      }
      return [...prev, { product, variant, quantity: qty }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: number, size: string | undefined) => {
    setItems((prev) =>
      prev.filter((i) => key(i.product.id, i.variant?.size) !== key(productId, size))
    );
  };

  const updateQty = (productId: number, size: string | undefined, qty: number) => {
    if (qty <= 0) {
      removeItem(productId, size);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        key(i.product.id, i.variant?.size) === key(productId, size)
          ? { ...i, quantity: qty }
          : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        total,
        itemCount,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
