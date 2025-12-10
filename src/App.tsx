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

const faqItems = [
  {
    question: "How long does delivery take?",
    answer: "Usually within 24 hours.",
  },
  {
    question: "Do you offer custom bouquets?",
    answer: "Yes, message us for custom orders.",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <HeroUIProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="shop" element={<Collection limit={20} />} />
            <Route path="/product/:id" element={<PDP />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </HeroUIProvider>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
