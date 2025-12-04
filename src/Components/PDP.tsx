import { useLocation } from "react-router-dom";

import "../styles/PDP.scss";
import { useState } from "react";

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
  const imageUrl = `http://localhost:3000${product.image}`;

  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    product?.variants?.[0] || null
  );
  const increaseQty = () => {
    if (selectedVariant && quantity < selectedVariant.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="pdp">
      <div className="pdp-images">
        <div className="main-image">
          <img src={imageUrl} alt="Product" />
        </div>
      </div>

      <div className="pdp-info">
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tincidunt, nisl nec egestas fermentum, nulla sapien bibendum sapien,
          at pulvinar libero risus ut magna. Praesent efficitur semper libero,
          at cursus nunc fermentum eu.
        </p>
        {product.variants.length > 0 && (
          <div className="variant-select">
            <label htmlFor="variant">Choose a size:</label>
            <select
              id="variant"
              value={selectedVariant?.size}
              onChange={(e) =>
                setSelectedVariant(
                  product.variants.find((v) => v.size === e.target.value) ||
                    null
                )
              }
            >
              {product.variants.map((v) => (
                <option key={v.size} value={v.size}>
                  {v.size} ({v.stock} in stock)
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="quantity-add">
          <div className="quantity">
            <button onClick={decreaseQty}>-</button>
            <span>{quantity}</span>
            <button
              onClick={increaseQty}
              disabled={
                selectedVariant ? quantity >= selectedVariant.stock : true
              }
            >
              +
            </button>
          </div>
          <button
            className="add-to-cart"
            disabled={!selectedVariant || selectedVariant.stock === 0}
          >
            {selectedVariant?.stock === 0
              ? "Out of Stock"
              : `Add to Cart (${quantity})`}
          </button>
        </div>

        <div className="sku-cat-tags">
          <p>
            <strong>Categories:</strong> {product.category}
          </p>
        </div>
      </div>
    </div>
  );
}
