import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import "./App.scss";
import Collection from "./Components/Collection";
import PDP from "./Components/PDP";
import FAQ from "./pages/FAQ";
import Cart from "./Components/Cart";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <HeroUIProvider>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="shop" element={<Collection limit={20} />} />
              <Route path="/product/:id" element={<PDP />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
            <Cart />
          </div>
        </HeroUIProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
