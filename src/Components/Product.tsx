import type { Product } from "./types";

type Props = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: Props) {
  if (!product) return null;

  return (
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <img src={product.image} />
        <h1>{product.title}</h1>
        <p>{product.price} $</p>
        {/* 
        {product.variants && product.variants.length > 0 && (
          <div>
            {product.variants.map((v) => (
              <span key={v}>{v}</span>
            ))}
          </div>
        )} */}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
