import { useLocation } from "react-router-dom";
import "../styles/PDP.scss";
import { useState } from "react";
import { useCart } from "../context/CartContext";

interface Variant {
  size: string;
  stock: number;
}

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  variants: Variant[];
}

export default function PDP() {
  const { state } = useLocation();
  const product = state?.product as Product | undefined;
  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    product?.variants?.[0] || null
  );
  const [added, setAdded] = useState(false);

  if (!product) return <h2 style={{ padding: "4rem", textAlign: "center" }}>Product not found</h2>;

  const imageUrl = `http://localhost:3000${product.image}`;

  const increaseQty = () => {
    if (selectedVariant && quantity < selectedVariant.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    addItem(product as any, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pdp">
      <div className="pdp-images">
        <div className="main-image">
          <img src={imageUrl} alt={product.title} />
        </div>
      </div>

      <div className="pdp-info">
        <p className="pdp-eyebrow">{product.category}</p>
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>

        <div className="pdp-divider" />

        <p className="description">
          {product.description ||
            "A beautiful, hand-picked arrangement crafted with love. Perfect for any occasion — from romantic gestures to heartfelt gifts."}
        </p>

        {product.variants.length > 0 && (
          <div className="variant-select">
            <label htmlFor="variant">Choose a size:</label>
            <select
              id="variant"
              value={selectedVariant?.size}
              onChange={(e) =>
                setSelectedVariant(
                  product.variants.find((v) => v.size === e.target.value) || null
                )
              }
            >
              {product.variants.map((v) => (
                <option key={v.size} value={v.size}>
                  {v.size} — {v.stock} in stock
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="quantity-add">
          <div className="quantity">
            <button onClick={decreaseQty}>−</button>
            <span>{quantity}</span>
            <button
              onClick={increaseQty}
              disabled={selectedVariant ? quantity >= selectedVariant.stock : true}
            >
              +
            </button>
          </div>
          <button
            className="add-to-cart"
            onClick={handleAddToCart}
            disabled={!selectedVariant || selectedVariant.stock === 0}
          >
            {added
              ? "Added!"
              : selectedVariant?.stock === 0
              ? "Out of Stock"
              : `Add to Cart — $${(product.price * quantity).toFixed(2)}`}
          </button>
        </div>

        <div className="sku-cat-tags">
          <p><strong>Category:</strong> {product.category}</p>
          {selectedVariant && (
            <p><strong>Stock:</strong> {selectedVariant.stock} remaining</p>
          )}
        </div>
      </div>
    </div>
  );
}
