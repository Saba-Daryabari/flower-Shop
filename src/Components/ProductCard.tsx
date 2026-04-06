import { useNavigate } from "react-router";
import type { Product } from "./types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const navigate = useNavigate();
  const imageUrl = `http://localhost:3000${product.image}`;

  const handleClick = () =>
    navigate(`/product/${product.id}`, { state: { product } });

  return (
    <div className="productCard" onClick={handleClick}>
      <div className="imageContainer">
        <img src={imageUrl} className="productCardImage" alt={product.title} />
        <span className="productCardCategory">{product.category}</span>
        <div className="productCardOverlay">
          <button className="productCardCTA">View Product</button>
        </div>
      </div>
      <div className="productCardInfo">
        <h3 className="productCardTitle">{product.title}</h3>
        <p className="productCardPrice">${product.price}</p>
      </div>
    </div>
  );
}
