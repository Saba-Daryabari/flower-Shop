import type { Product } from "./types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const imageUrl = `http://localhost:3000${product.image}`;
  return (
    <div className="productCard">
      <img src={imageUrl} className="productCardImage" />
      <h3 className="productCardTitle">{product.title}</h3>
      <p className="productCardPrice">{product.price}$</p>
    </div>
  );
}
