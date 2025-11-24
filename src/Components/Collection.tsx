import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import type { Product } from "./types";
import "../styles/collection.scss";
import "../styles/globals.scss";

export default function Collection({limit}: {limit?: number}) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => setProducts(res.data.data))
      .catch(console.error);
  }, []);

  return (
    <section className="container">
      <div className="collectionContainer">
        <h3 className="introHeading">Collections</h3>
        <div className="collection">
          {products.slice(0, limit).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
