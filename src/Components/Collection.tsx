import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import type { Product } from "./types";
import "../styles/collection.scss";

export default function Collection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => setProducts(res.data.data))
      .catch(console.error);
  }, []);

  return (
    <div className="container">
      <div className="collectionContainer">
        <h3 className="collectionTitle">Collections</h3>
        <div className="collection">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
