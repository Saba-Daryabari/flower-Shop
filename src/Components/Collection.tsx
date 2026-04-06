import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import type { Product } from "./types";
import "../styles/collection.scss";
import "../styles/globals.scss";

export default function Collection({ limit }: { limit?: number }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => setProducts(res.data.data))
      .catch(console.error);
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const filtered =
    activeCategory === "All"
      ? products.slice(0, limit)
      : products
          .filter((p) => p.category === activeCategory)
          .slice(0, limit);

  return (
    <section className="container">
      <div className="collectionContainer">
        <div className="collectionHeader">
          <h3 className="introHeading">Our Collections</h3>
          <p className="introDetails collectionSubtitle">
            Hand-picked blooms for every occasion
          </p>
        </div>

        <div className="categoryFilters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`categoryChip ${activeCategory === cat ? "categoryChip--active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="collection">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
